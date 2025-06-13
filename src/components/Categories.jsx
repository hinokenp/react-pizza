import { useSelector, useDispatch } from "react-redux";
import { changeCategoriesId } from "../redux/categoies/categoriesSlice";

function Categories() {
  const categoriesId = useSelector((state) => state.categories.value);
  const dispatch = useDispatch();

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((name, index) => {
          return (
            <li
              key={index}
              onClick={() => dispatch(changeCategoriesId(index))}
              className={categoriesId === index ? "active" : ""}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
