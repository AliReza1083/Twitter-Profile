import Layouts from "@/components/Layouts";
import "@/styles/globals.css";
import "../styles/custom.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </Provider>
    </>
  );
}
