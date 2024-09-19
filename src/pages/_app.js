import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const { token, email, userId } = router.query;

    if (token) {
      sessionStorage.setItem('authToken', token);
      sessionStorage.setItem('userEmail', email);
      sessionStorage.setItem('userId', userId);

      router.push('/profile');
    }
  }, [router]);

  return <Component {...pageProps} />
}
