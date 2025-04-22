function Categories({ value, onChangeCategories }) {
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
              onClick={() => onChangeCategories(index)}
              className={value === index ? "active" : ""}
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
