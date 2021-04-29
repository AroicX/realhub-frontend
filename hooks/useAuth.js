import { useRouter } from "next/router";
const useAuth = (Component) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem("user-data");

      if (!accessToken) {
        Router.replace("/");
        return null;
      }
      return <Component {...props} />;
    }

    return null;
  };
};

export default useAuth;