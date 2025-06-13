import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import qs from "qs";

import { changeSortType } from "../redux/sort/sortSlice";
import { changeCategoriesId } from "../redux/categoies/categoriesSlice";
import { fetchPizzas } from "../redux/pizzas/pizzasSlice";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort, { sortList } from "../components/Sort";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  const categoriesId = useSelector((state) => state.categories.value);
  const sortType = useSelector((state) => state.sort.value);
  const { items, status } = useSelector((state) => state.pizzas);
  const searchValue = useSelector((state) => state.search.value);

  const getPizzas = () => {
    const filter = categoriesId !== 0 ? `category=${categoriesId}` : "";
    const searсh = searchValue ? `&title=${searchValue}` : "";
    const sortProperty = sortType.sortProperty;
    const order = sortType.order;

    dispatch(fetchPizzas({ filter, searсh, sortProperty, order }));
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find(
        (obj) =>
          obj.sortProperty === params.sortProperty && obj.order === params.order
      );

      dispatch(changeCategoriesId(params.categoriesId));
      dispatch(changeSortType(sort));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        order: sortType.order,
        categoriesId,
      });

      navigate(`?${queryString}`);
    } else {
      setIsMounted(true);
    }
  }, [categoriesId, sortType]);

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoriesId, sortType, searchValue]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeleton = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h1 className="content__title">Все пиццы</h1>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>Не удалось получить пиццы. Попробуйте повторить попытку позже</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeleton : pizzas}
        </div>
      )}
    </>
  );
}

export default Home;
