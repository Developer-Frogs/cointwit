import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.config";

export class AuthService {
  public static async signUp(email: string, password: string) {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((e) => console.error(e));

    if (res) {
      sendEmailVerification(res.user);
    }

    return res || null;
  }

  public static async signIn(email: string, password: string) {
    const res = await signInWithEmailAndPassword(auth, email, password).catch(
      (e) => console.error(e)
    );
    return res || null;
  }

  public static async signOut() {
    return signOut(auth).catch((e) => console.error(e)) || null;
  }
}
