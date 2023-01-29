import React from "react";

export default function TextInput({ label, id, ...rest }) {
  return (
    <>
      <label
        htmlFor={id}
        className="text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
      <input {...rest} />
    </>
  );
}
