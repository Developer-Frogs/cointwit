import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Feed from "../src/components/containers/Feed";
import SideBar from "../src/components/containers/SideBar";
import Widgets from "../src/components/containers/Widgets";
import { useAuth } from "../contexts/auth.context";
import styles from "../styles/Home.module.css";
import SignUp from "../src/components/UI/SignUp";
import Modal from "../src/components/UI/Modal";
import useModal from "../src/configs/hooks/useModal";
import SignUpButton from "../src/components/UI/SignUpButton";
import Footer from "../src/components/containers/Footer";

const USERNAME = "birkanalpyaman@gmail.com";
const PASSWORD = "123456";

export default function Home() {
  const { signIn, signOut, signUp, user } = useAuth();
  const { isModalVisible, openModal, closeModal } = useModal();

  const handleSignUp = async () => {
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
    <div>
      <Head>
        <title>CoinTwit</title>
      </Head>
      <main className="grid grid-cols-9 min-h-screen text-twitGray">
        <SideBar />
        <Feed />
        <Widgets />

        {/* <button onClick={handleSignUp}>SignUp</button>
        <button onClick={SignIn}>SignIn</button>
        <button onClick={SignOut}>SignOut</button> */}
      </main>
      <Footer />
    </div>
  );
}
