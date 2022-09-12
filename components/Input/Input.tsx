import React, { FC } from "react";

export interface iInput {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  id?: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

const Input: FC<iInput> = ({
  onChange,
  onBlur,
  value,
  id,
  name,
  placeholder,
  error,
  type = "text",
}) => {
  return (
    <>
      <input
        className={`block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm ${
          error ? "border-red-700 outline-red-700" : ""
        }`}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error ? (
        <span className="text-red-500  font-medium">{error}</span>
      ) : null}
    </>
  );
};

export default Input;
