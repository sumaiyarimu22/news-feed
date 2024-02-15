import { useEffect, useState } from "react";

export const useNewsQuery = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchNewsData = async () => {
    try {
      setLoading({
        state: true,
        message: "Fetching News",
      });
      const response = await fetch(`http://localhost:8000/v2/top-headlines`);
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
    fetchNewsData();
  }, []);

  return {
    newsData,
    error,
    loading,
  };
};
