import { Button, Label, Checkbox } from "flowbite-react";
import React, { FC } from "react";
import { useFormik } from "formik";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../util/firebase";
import { useRouter } from "next/router";
import { useAppSelector } from "./../hooks/useAppSelector";
import * as Yup from "yup";
import Input from "../components/Input/Input";

const Registration: FC = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  if (user) {
    router.push("/");
  }

  const auth = getAuth(firebaseApp);
  const [createUserWithEmailAndPassword, _user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Минимальное кол-во символов 6")
      .max(20, "Максимальное кол-во символов 20")
      .required("Введите пароль"),
    changePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Пароли не соответствуют")
      .required("Повторно введите пароль"),
    email: Yup.string()
      .email("Введите валидный email")
      .required("Введите email"),
    remember: Yup.boolean().oneOf([true], "Примите соглашение"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      changePassword: "",
      remember: true,
    },
    validationSchema,
    onSubmit: async (values) => {
      await createUserWithEmailAndPassword(values.email, values.password);
    },
  });

  return (
    <div className="container flex justify-center items-center h-full mx-auto py-10">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 max-w-[600px] w-full"
      >
        <h3 className="text-3xl text-center font-medium text-gray-900 dark:text-white">
          Создать свой аккаунт
        </h3>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Ваш email" />
          </div>
          <Input
            id="email"
            name="email"
            placeholder="name@company.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.errors.email}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Ваш пароль" />
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password.trim()}
            error={formik.errors.password}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="changePassword" value="Повторите пороль" />
          </div>
          <Input
            id="changePassword"
            name="changePassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.changePassword.trim()}
            error={formik.errors.changePassword}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              name="remember"
              checked={formik.values.remember}
              onChange={() =>
                formik.setFieldValue("remember", !formik.values.remember)
              }
            />
            <Label
              htmlFor="remember"
              style={
                formik.errors.remember
                  ? {
                      color: "red",
                    }
                  : {}
              }
            >
              Принимаю условия
            </Label>
          </div>
          <div className="flex justify-end">
            <Button type={"submit"} disabled={loading}>
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
