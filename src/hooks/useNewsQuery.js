import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../context";

const useNewsQuery = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const { selectedCategory, setselectedCategory } = useContext(CategoryContext);
  const { searchText } = useContext(SearchContext);

  // data fetching & filtering by category
  const fetchNewsData = async (category = null) => {
    try {
      setLoading({
        state: true,
        message: "Fetching News",
      });
      let response;
      if (category && category !== "all") {
        response = await fetch(
          `${
            import.meta.env.VITE_BASE_API_URL
          }/top-headlines?category=${category}`
        );
      } else {
        response = await fetch(
          `${import.meta.env.VITE_BASE_API_URL}/top-headlines`
        );
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

  // data fetching & filtering by category
  useEffect(() => {
    setLoading({
      state: true,
      message: "Finding news...",
    });
    if (selectedCategory) {
      fetchNewsData(selectedCategory);
    } else if (selectedCategory === "all") {
      fetchNewsData();
    } else {
      fetchNewsData();
    }
  }, [selectedCategory]);

  // data fetching by search keyWord
  const fetchSearchedData = async () => {
    try {
      setLoading({
        state: true,
        message: "Fetching News",
      });

      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/search?q=${searchText}`
      );

      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setselectedCategory(null);
      setNewsData({
        articles: [...data.result],
      });
      console.log(data.result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };
  // data fetching by search keyWord
  useEffect(() => {
    if (searchText) {
      fetchSearchedData();
    } else {
      fetchNewsData();
    }
  }, [searchText]);

  return {
    newsData,
    error,
    loading,
  };
};
export default useNewsQuery;
