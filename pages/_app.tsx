import { AppProps } from "next/app";
import Header from "../components/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
export default App;
