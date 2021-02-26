import { fetcher } from "@/utils/index";
import useSWR from "swr";

const useProducts = () => {
  const { data: categoriesData, error } = useSWR(
    "/categories.json?vendor_id=1&include=products&active=1&products$active=1&limit=100&sort[name]=asc",
    fetcher
  );

  let productChoice = null;

  const setProductChoice = (product) => {
    productChoice = product;
  };

  return {
    categoriesData,
    error,
    productChoice,
    setProductChoice,
  };
};

export default useProducts;
