import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import TextInput from "../common/TextInput";

export default function Register() {
  return (
    <div className="w-screen md:w-6/12 container mx-auto grid grid-cols-1 min-h-screen justify-center items-center">
      <div className="border-4 border-sky-500 bg-white py-10 px-2.5 m-2.5 md:px-20 rounded-lg drop-shadow-2xl">
        <h1 className="text-2xl text-center uppercase font-bold">Register</h1>
        <br />
        <div>
          <TextInput
            label="Enter Name"
            id="name"
            type="text"
            name="name"
            className="block px-2.5 pb-2.5 rounded pt-5 w-full text-sm text-gray-900 bg-gray-300 border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div>
          <TextInput
            label="Enter Email"
            id="email"
            type="email"
            name="email"
            className="block px-2.5 pb-2.5 rounded pt-5 w-full text-sm text-gray-900 bg-gray-300 border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div>
          <TextInput
            label="Enter Phone"
            id="phone"
            type="number"
            name="phone"
            className="block px-2.5 pb-2.5 rounded pt-5 w-full text-sm text-gray-900 bg-gray-300 border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div>
          <TextInput
            label="Enter Password"
            id="password"
            type="password"
            name="password"
            className="block px-2.5 pb-2.5 rounded pt-5 w-full text-sm text-gray-900 bg-gray-300 border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div className="py-3">
          <Button
            label="Register"
            className="uppercase font-bold w-full text-xl text-white bg-rose-500 py-3 px-4 rounded-lg focus:bg-rose-700"
          />
        </div>

        <div>
          Already have acount please &nbsp;
          <Link className="underline text-blue-700" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

/* 
bg-gradient-to-r from-violet-500 to-violet-700
*/
