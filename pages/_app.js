import "../styles/index.css";
import "../styles/app.scss";
import { AuthProvider } from "@/hooks/useUser";
import ListingProvider from "@/hooks/listing";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ListingProvider>
        <Component {...pageProps} />
      </ListingProvider>
    </AuthProvider>
  );
}

export default MyApp;
