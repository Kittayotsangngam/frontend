import React from "react";
import { useState } from "react";
const Signup = () => {
  const [UnameOrEmail, setUnameOrEmail] = useState("");
  const [password, setpassword] = useState("");

  const user = {
    email: "test@test.com",
    username: "test123",
    password: "123456",
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    if (UnameOrEmail === user.email || UnameOrEmail === user.username) {
      if (password === user.password) {
        console.log("User Loged In");
      } else {
        console.log("wrong password");
      }
    } else {
      console.log("please check you username or Email");
    }
  };

  return (
    <div className="flex justify-content:space-evenly border-black-solid pt-16 ">
      <div className="w-2/5">
        <img
          className="w-full h-screen"
          src="https://sv1.picz.in.th/images/2023/04/23/y4yeaS.png"
          alt=""
        />
      </div>
      <div className="w-3/5  mx-auto   bg-[#e5e5e5] flex justify-center items-center">
        <div>
          <div className="text-3xl font-bold mb-3.5">Log in</div>
          <form onSubmit={handlesubmit}>
            <div className="form-group">
              <label htmlFor="Email or UserName">Username or Email</label>
              <div className="mb-3.5"></div>
              <input
                type="text"
                required
                value={UnameOrEmail}
                onChange={(e) => setUnameOrEmail(e.target.value)}
                className="Input h-9 w-56 "
              />
            </div>
            <div className="mb-3.5"></div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <div className="mb-3.5"></div>
              <input
                type="Password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="Input h-9 w-56"
              />
            </div>
            <div className="mb-9"></div>
            <div className="flex justify-center mb-9">
              <button
                type="submit"
                className="bg-[#FFAA3B] rounded-3xl w-32 h-8 text-white flex justify-center items-center"
              >
                Log in
              </button>
            </div>
            <div className="">
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
