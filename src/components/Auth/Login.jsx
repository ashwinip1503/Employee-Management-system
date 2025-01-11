import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is", email);
    console.log("Password is", password);

    setEmail("")
    setPassword("")
  };



  return (
    <div className=" flex h-screen w-screen items-center justify-center">
      <div className="border-2 p-20 border-emerald-600 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl px-5 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl px-5 py-3 mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter yourPassword"
          />
          <button
            className="text-white outline-none border-none   bg-emerald-600 rounded-full text-xl px-5 py-3 mt-5 placeholder:text-gray-400"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
