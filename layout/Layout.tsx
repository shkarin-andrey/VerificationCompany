import { getAuth } from "firebase/auth";
import { Spinner } from "flowbite-react";
import React, { FC, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "./Footer/Footer";
import Header from "./Header";
import { iLayout } from "./Layout.interface";
import { useAppDispatch } from "./../hooks/useAppDispatch";
import { login } from "../redux/reducers/authSlice";
import { firebaseApp } from "../util/firebase";

const Layout: FC<iLayout> = ({ children }) => {
  const auth = getAuth(firebaseApp);
  const [user, loading, error] = useAuthState(auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!loading && user) {
      dispatch(login(user));
    }
  }, [user]);

  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner size="xl" />
    </div>
  ) : (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
