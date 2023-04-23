import React from "react";
import { useState } from "react";
const Signup = () => {
  const [Uname, setUname] = useState("");
  const [password, setpassword] = useState("");
  const [Email, setEmail] = useState("");
  const [passcon, setpasscon] = useState("");
  const [Tel, setTel] = useState("");

  

  return (
    <div className="flex justify-content:space-evenly border-black-solid pt-16 bg-[#e5e5e5] ">
      <div className="w-2/5">
        <img
          className="w-full h-screen ml-44"
          src="https://sv1.picz.in.th/images/2023/04/23/y4yeaS.png"
          alt=""
        />
      </div>
      <div className="w-3/5  mx-auto   flex justify-center mt-12">
        <div>
          <div className="text-3xl font-bold mb-3.5">Sign up</div>
          <form onSubmit=''>
            <div className="form-group">
              <label htmlFor="UserName" className="font-medium">Username</label>
              <div className="mb-3.5"></div>
              <input
  
                type="text"
                required
                value={Uname}
                onChange={(e) => setUname(e.target.value)}
                className="Input h-12 w-72 rounded-lg shadow-lg  indent-3"
              />
            </div>
            <div className="mb-3.5"></div>
            <div className="form-group">
              <label htmlFor="Email" className="font-medium">Email</label>
              <div className="mb-3.5"></div>
              <input
                type="Email"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="Input h-12 w-72 rounded-lg shadow-lg indent-3"
              />
            </div>
            <div className="mb-3.5"></div>
            <div className="form-group">
              <label htmlFor="Tel" className="font-medium">Tel.</label>
              <div className="mb-3.5"></div>
              <input
                type="Tel"
                required
                value={Tel}
                onChange={(e) => setTel(e.target.value)}
                className="Input h-12 w-72 rounded-lg shadow-lg indent-3"
              />
            </div>
            <div className="mb-3.5"></div>
            <div className="form-group">
              <label htmlFor="Password" className="font-medium">Password</label>
              <div className="mb-3.5"></div>
              <input
                type="Password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="Input h-12 w-72 rounded-lg shadow-lg indent-3"
              />
            </div>
            <div className="mb-3.5"></div>
            <div className="form-group">
              <label htmlFor="Passwordconfirm" className="font-medium">Password Confirmation</label>
              <div className="mb-3.5"></div>
              <input
                type="Password"
                required
                value={passcon}
                onChange={(e) => setpasscon(e.target.value)}
                className="Input h-12 w-72 rounded-lg shadow-lg indent-3"
              />
            </div>
            <div className="mb-9"></div>
            <div className="flex justify-center mb-3 ">
              <button
                type="submit"
                className="bg-[#FFAA3B] rounded-3xl w-32 h-8 text-white flex justify-center items-center hover:shadow-lg"
              >
                Create Account
              </button>
            </div>
            <a href="/Login"> 
            <div className=" flex justify-center items-center hover:underline">
            Already have account? <span className="text-[#FFAA3B] indent-1"> Log in</span>
            </div></a>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
