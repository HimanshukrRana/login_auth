import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

import store from "@/store/store";
import { Provider } from "react-redux";
import { MyProvider } from "@/ContextApi";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // store.subscribe(() => console.log(store.getState()));
  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <div className="nav">
            <Navbar />
          </div>
          <MyProvider>
            <Component {...pageProps} />
          </MyProvider>
        </Provider>
      </SessionProvider>
    </>
  );
}

