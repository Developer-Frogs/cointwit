import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widgets from "../components/Widgets";
import { useAuth } from "../contexts/auth.context";
import styles from "../styles/Home.module.css";

const USERNAME = "birkanalpyaman@gmail.com";
const PASSWORD = "123456";

export default function Home() {
  const { signIn, signOut, signUp, user } = useAuth();

  const SignUp = async () => {
    const res = await signUp(USERNAME, PASSWORD);
    console.log("Home SignUp", res);
  };

  const SignIn = async () => {
    const res = await signIn(USERNAME, PASSWORD);
    console.log("Home SignIn", res);
  };

  const SignOut = async () => {
    const res = await signOut();
    console.log("Home SignOut", res);
  };

  useEffect(() => {
    console.log("User", user);
  }, [user]);

  return (
    <div className="">
      <Head>
        <title>CoinTwit</title>
      </Head>
      <main className="grid grid-cols-9 bg-black min-h-screen text-twitGray">
        <SideBar />
        <Feed />
        <Widgets />
        <button onClick={SignUp}>SignUp</button>
        <button onClick={SignIn}>SignIn</button>
        <button onClick={SignOut}>SignOut</button>
      </main>
    </div>
  );
}
