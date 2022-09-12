import { getAuth, signOut } from "firebase/auth";
import { Dropdown, Avatar } from "flowbite-react";
import router from "next/router";
import React, { FC } from "react";
import { logout } from "../../redux/reducers/authSlice";
import { useAppDispatch } from "./../../hooks/useAppDispatch";
import { iAvatarDropdown } from "./AvatarDropdown.interface";

const AvatarDropdown: FC<iAvatarDropdown> = ({ user }) => {
  const dispatch = useAppDispatch();
  const auth = getAuth();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };
  return (
    <Dropdown
      label={
        <Avatar
          alt={user.email || ""}
          img={user.providerData[0].photoURL || ""}
          rounded={true}
        />
      }
      arrowIcon={false}
      inline={true}
    >
      <Dropdown.Header>
        <span className="block truncate text-sm font-medium">{user.email}</span>
      </Dropdown.Header>
      <Dropdown.Item onClick={() => router.push("/account")}>
        Личный кабинет
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>Выйти</Dropdown.Item>
    </Dropdown>
  );
};
export default AvatarDropdown;
