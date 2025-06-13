import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSortType } from "../redux/sort/sortSlice";

import Arrow from "./icons/Arrow";

export const sortList = [
  { name: "популярности", sortProperty: "rating", order: "desc" },
  { name: "возрастанию цены", sortProperty: "price", order: "asc" },
  { name: "убыванию цены", sortProperty: "price", order: "desc" },
];

function Sort() {
  const dispatch = useDispatch();
  const sortRef = useRef();
  const [open, setOpen] = useState(false);
  const sortType = useSelector((state) => state.sort.value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const handleClickSort = (obj) => {
    dispatch(changeSortType(obj));
    setOpen(!open);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__main">
        <Arrow />
        <p>
          Сортировка по:
          <span onClick={() => setOpen(!open)}>{sortType.name}</span>
        </p>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, index) => (
              <li
                key={index}
                onClick={() => handleClickSort(obj)}
                className={sortType.name === obj.name ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
