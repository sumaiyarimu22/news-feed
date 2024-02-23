import { categories } from "../../data/category";
import { CategoryContext } from "../../context";
import { useContext } from "react";

const Categories = () => {
  const { selectedCategory, setselectedCategory } = useContext(CategoryContext);

  return (
    <div className='container mx-auto mt-6'>
      <ul className='flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base'>
        {categories?.map((category) => (
          <li
            key={category?.value}
            className={
              selectedCategory === category?.value
                ? "text-emerald-400 text-2xl"
                : "text-black-400"
            }
          >
            <a
              href='#'
              onClick={(e) => {
                e.preventDefault();
                setselectedCategory(category?.value);
              }}
            >
              {category?.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
