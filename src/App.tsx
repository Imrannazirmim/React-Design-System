import DataProductSource from "./challenge5/shared/DataProductSource.tsx";
import axios from "axios";
import ProductsList from "./challenge5/components/ProductsList.tsx";

const getDataFetch = (url: string) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  return (
    <>
      <DataProductSource
        getDataProduct={getDataFetch("https://fakestoreapi.com/products")}
        resourceName="products"
      >
        <ProductsList />
      </DataProductSource>
    </>
  );
};
export default App;
