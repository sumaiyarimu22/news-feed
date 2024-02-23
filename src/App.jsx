import MainPage from "./page/MainPage";
import { CategoryProvider, NewsDataProvider, SearchProvider } from "./provider";

const App = () => {
  return (
    <SearchProvider>
      <CategoryProvider>
        <NewsDataProvider>
          <MainPage />
        </NewsDataProvider>{" "}
      </CategoryProvider>
    </SearchProvider>
  );
};

export default App;
