import { Button, Modal, Label, TextInput, Checkbox } from "flowbite-react";
import React, { FC, useState } from "react";
import { useFormik } from "formik";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../../util/firebase";
import Link from "next/link";

const Login: FC = () => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const auth = getAuth(firebaseApp);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    onSubmit: async (values) => {
      await signInWithEmailAndPassword(values.email, values.password);
    },
  });

  return (
    <>
      <Button onClick={onOpen}>Войти</Button>
      {open && (
        <Modal show={open} size="md" popup={true} onClose={onClose}>
          <Modal.Header />
          <Modal.Body>
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8"
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Войти в свой аккаунт
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Ваш email" />
                </div>
                <TextInput
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Ваш пароль" />
                </div>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    name="remember"
                    checked={formik.values.remember}
                    onChange={() =>
                      formik.setFieldValue("remember", !formik.values.remember)
                    }
                  />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a
                  href="/modal"
                  className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Забыли пароль?
                </a>
              </div>
              <div className="w-full">
                <Button type={"submit"} disabled={loading}>
                  Войти
                </Button>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Не зарегистрированны?{" "}
                <Link href="/registration">
                  <a className="text-blue-700 hover:underline dark:text-blue-500">
                    Создать аккаунт
                  </a>
                </Link>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Login;
