import { getAuth, signOut } from "firebase/auth";
import { Avatar } from "flowbite-react";
import router from "next/router";
import React, { FC, useState } from "react";
import { logout } from "../../redux/reducers/authSlice";
import { useAppDispatch } from "./../../hooks/useAppDispatch";
import { iAvatarDropdown } from "./AvatarDropdown.interface";

const AvatarDropdown: FC<iAvatarDropdown> = ({ user }) => {
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useAppDispatch();
  const auth = getAuth();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };

  const handleAvatarClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleAvatarClick}
      onMouseLeave={handleAvatarClick}
    >
      <Avatar
        alt={user.email || ""}
        img={user.providerData[0].photoURL || ""}
        rounded={true}
        style={{
          cursor: "pointer",
        }}
      />
      <div
        className={`absolute right-0 rounded-md shadow bg-white transition-all duration-300 origin-top-right ${
          dropdown ? "scale-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="text-sm font-medium px-4 py-2">{user.email}</div>
        <hr />
        <div
          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
          onClick={() => router.push("/account")}
        >
          Личный кабинет
        </div>
        <div
          className="px-4 py-2 cursor-pointer hover:bg-gray-200"
          onClick={handleLogout}
        >
          Выйти
        </div>
      </div>
    </div>
  );
};
export default AvatarDropdown;
