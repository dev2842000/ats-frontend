import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { setToken } from "@/utils/helper";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const { token, userId } = router.query;

    if (token) {
      setToken(token, userId);
      router.push('/profile');
    }
  }, [router, router.query.token, router.query.userId]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
