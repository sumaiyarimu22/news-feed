import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../context";

const useNewsQuery = () => {
  console.log("hi");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const { selectedCategory, setselectedCategory } = useContext(CategoryContext);
  console.log(setselectedCategory);

  const fetchNewsData = async (category = null) => {
    try {
      setLoading({
        state: true,
        message: "Fetching News",
      });
      let response;
      if (category && category !== "all") {
        response = await fetch(
          `${import.meta.env.VITE_BASE_API_URL}?category=${category}`
        );
      } else {
        response = await fetch(`${import.meta.env.VITE_BASE_API_URL}`);
      }

      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setNewsData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      state: true,
      message: "Finding news...",
    });
    if (selectedCategory) {
      fetchNewsData(selectedCategory);
    } else {
      fetchNewsData(); // Fetch news with no specific category
    }
  }, [selectedCategory]);

  return {
    newsData,
    error,
    loading,
  };
};
export default useNewsQuery;
