// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const SignUpPage = () => {
//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confrimPassword, setConfrimPassword] = useState("");

//   const [errMsg, setErrMsg] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confrimPassword: "",
//   });

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userNameError = validateUsername(username) ? "" : "Invalid Username";
//     const emailError = validateEmail(email) ? "" : "Invalid email";
//     const passwordError = validatePassword(password) ? "" : "Invalid password";
//     const confirmPasswordErr = validatePassword(confrimPassword)
//       ? ""
//       : "Password Didn't Match";
//     setErrMsg({
//       username: userNameError,
//       password: passwordError,
//       email: emailError,
//       confrimPassword: confirmPasswordErr,
//     });
//     if (!userNameError && !emailError && !passwordError) {
//       if (password == confrimPassword) {
//         axios
//           .post("http://localhost:3001/users", { username, email, password })
//           .then((res) => {
//             console.log(res);
//           });
//         navigate("/");
//       }
//     }
//   };

//   //validation

//   const validateUsername = (username) => {
//     const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{1,14}[a-zA-Z0-9]$/;
//     return usernameRegex.test(username);
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     return passwordRegex.test(password);
//   };

//   return (
//     <div className=" flex items-center justify-center ">
//       <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-2 text-blue-500  text-center">
//           Sign Up
//         </h2>
//         <hr className="border-2 border-blue-500 rounded-lg w-32 m-auto mb-5" />
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="flex ml-1  text-blue-500 text-sm font-bold mb-4">
//               Username
//             </label>
//             {errMsg.username && (
//               <p className="text-red-500 mb-2">{errMsg.username}</p>
//             )}
//             <input
//               type="text"
//               id="username"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUserName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="flex ml-1  text-blue-500 text-sm font-bold mb-4">
//               Email
//             </label>
//             {errMsg.email && (
//               <p className="text-red-500 mb-2">{errMsg.email}</p>
//             )}
//             <input
//               type="email"
//               id="email"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="flex ml-1  text-blue-500 text-sm font-bold mb-4"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             {errMsg.password && (
//               <p className="text-red-500 mb-2">{errMsg.password}</p>
//             )}
//             <input
//               type="text"
//               id="password"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="flex ml-1  text-blue-500 text-sm font-bold mb-4"
//               htmlFor="confirmPassword"
//             >
//               Confirm Password
//             </label>

//             <input
//               type="text"
//               id="confirmPassword"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Confirm password"
//               value={confrimPassword}
//               onChange={(e) => setConfrimPassword(e.target.value)}
//               required
//             />
//             {errMsg.confrimPassword && (
//               <p className="text-red-500 mb-2">{errMsg.confrimPassword}</p>
//             )}
//           </div>
//           <div className="flex flex-col gap-4 items-center justify-between">
//             <button
//               type="submit"
//               className=" w-full m-auto bg-red-500 hover:bg-red-700 text-white font-bold p-2  rounded focus:outline-none focus:shadow-outline"
//             >
//               Sign Up
//               {/* <Link to="/movies"></Link> */}
//             </button>

//             <Link
//               className=" w-full m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold  p-2 rounded focus:outline-none focus:shadow-outline"
//               to="/"
//             >
//               Log In
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
