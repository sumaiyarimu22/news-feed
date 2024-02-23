import MainPage from "./page/MainPage";
import { CategoryProvider, NewsDataProvider } from "./provider";

const App = () => {
  return (
    <CategoryProvider>
      <NewsDataProvider>
        <MainPage />
      </NewsDataProvider>{" "}
    </CategoryProvider>
  );
};

export default App;
