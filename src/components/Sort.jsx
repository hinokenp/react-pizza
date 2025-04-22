import { useState } from "react";
import Arrow from "./icons/Arrow";

function Sort({ value, onChangeSort }) {
  const [open, setOpen] = useState(false);
  const list = [
    { name: "популярности", sortName: "rating", order: "desc" },
    { name: "возрастанию цены", sortName: "price", order: "asc" },
    { name: "убыванию цены", sortName: "price", order: "desc" },
  ];

  const handleClickSort = (obj) => {
    onChangeSort(obj);
    setOpen(!open);
  };

  return (
    <div className="sort">
      <div className="sort__main">
        <Arrow />
        <p>
          Сортировка по:
          <span onClick={() => setOpen(!open)}>{value.name}</span>
        </p>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => (
              <li
                key={index}
                onClick={() => handleClickSort(obj)}
                className={value.name === obj.name ? "active" : ""}
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
