import { useEffect, useState } from "react";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

function Home({ searchValue }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesId, setCategoriesId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortName: "rating",
    order: "desc",
  });

  useEffect(() => {
    setIsLoading(true);

    const filter = categoriesId !== 0 ? `category=${categoriesId}` : "";
    const searсh = searchValue ? `&title=${searchValue}` : "";

    fetch(
      import.meta.env.VITE_API_URL +
        "/items" +
        `?${filter}` +
        `&orderBy=${sortType.sortName}` +
        `&order=${sortType.order}` +
        searсh
    )
      .then((res) => {
        if (!res.ok) {
          return [];
        }
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, [categoriesId, sortType, searchValue]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeleton = [...new Array(8)].map((item, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoriesId}
          onChangeCategories={(id) => setCategoriesId(id)}
        />
        <Sort value={sortType} onChangeSort={(obj) => setSortType(obj)} />
      </div>
      <h1 className="content__title">Все пиццы</h1>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
    </>
  );
}

export default Home;
