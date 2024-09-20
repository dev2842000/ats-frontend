import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { setToken } from "@/utils/helper";
import { AuthProvider } from "@/Context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const { token, userId } = router.query;

    if (token) {
      setToken(token,userId)

      window.location.href='/';

    }
  }, [router.query.token, router.query.userId]);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
