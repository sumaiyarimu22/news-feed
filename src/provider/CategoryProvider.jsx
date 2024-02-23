import { useState } from "react";
import { CategoryContext } from "../context";

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setselectedCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setselectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
