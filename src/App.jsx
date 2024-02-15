import MainPage from "./page/MainPage";
import { NewsDataProvider } from "./provider";

const App = () => {
  return (
    <NewsDataProvider>
      <MainPage />
    </NewsDataProvider>
  );
};

export default App;
