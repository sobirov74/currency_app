import Card from "./components/Card";
import PageSelect from "./components/PageSelect";
import { Route, Routes } from "react-router-dom";
import CurrenciesEnum from "src/pages/Currencies";
import Converter from "src/pages/Converter";

const App = () => {
  return (
    <Card>
      <PageSelect />
      <div className="overflow-y-auto w-full h-full">
        <Routes>
          <Route element={<Converter />} index path={"/"} />
          <Route element={<CurrenciesEnum />} index path={"/currencies"} />
        </Routes>
      </div>
    </Card>
  );
};

export default App;
