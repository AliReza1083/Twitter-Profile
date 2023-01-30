import { useEffect } from "react";
import "@/styles/globals.css";
import AOS from "aos";

import "aos/dist/aos.css";
import { store } from "@/store";
import { Provider } from "react-redux";

import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
    </>
  );
}
