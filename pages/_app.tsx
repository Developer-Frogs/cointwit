import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { AuthContextProvider } from "../contexts/auth.context";
import "../firebase/firebase.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
