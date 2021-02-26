import "../styles/index.css";
import "../styles/app.scss";
import { AuthProvider } from "@/hooks/useUser";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
