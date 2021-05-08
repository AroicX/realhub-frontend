import { useRouter } from "next/router";
const useAuth = (Component) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const accessToken = localStorage.getItem("user-data");

      if (!accessToken) {
        localStorage.setItem("be-authorized", window.location.pathname);
        Router.replace("/");
        return null;
      }
    }
    return <Component {...props} />;

    return null;
  };
};

export default useAuth;
