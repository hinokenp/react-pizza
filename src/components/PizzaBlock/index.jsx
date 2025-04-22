import { useState } from "react";
import Plus from "../icons/Plus";

function PizzaBlock({ title, imageUrl, types, sizes, price }) {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);
  const typeName = ["тонкое", "традиционное"];

  console.log();

  return (
    <div className="pizza-block">
      <img src={imageUrl} alt="Pizza" className="pizza-block__img" />
      <div className="pizza-block__title">{title}</div>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId) => (
            <li
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? "active" : ""}
            >
              {typeName[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              key={index}
              onClick={() => setActiveSize(index)}
              className={activeSize === index ? "active" : ""}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <button className="button button_outline button_add">
          <Plus />
          <div>
            Добавить
            <span>2</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
