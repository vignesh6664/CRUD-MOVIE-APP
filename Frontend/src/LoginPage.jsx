// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errMsg, setErrMsg] = useState({ email: "", password: "" });
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const emailError = validateEmail(email) ? "" : "Enter Proper Email";
//     const passwordError = validatePassword(password)
//       ? ""
//       : "Enter Correct Password";
//     setErrMsg({ email: emailError, password: passwordError });
//     if (!emailError && !passwordError) {
//       axios.post("http://localhost:3001/logininfo",{email,password}).then((res) => {
//         console.log(res);
//         // navigate("/movies");
//       });
//     }
//   };

//   // Validation

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     return passwordRegex.test(password);
//   };
//   return (
//     <div className="flex mt-28 items-center justify-center ">
//       <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-2 text-blue-500 text-center">
//           Login
//         </h2>
//         <hr className="border-2 border-blue-500 rounded-lg w-32 m-auto mb-5" />
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               className="flex ml-1 text-blue-500 text-sm font-bold mb-4"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               // type="email"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Enter your email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {errMsg.email && (
//               <p className="text-red-500 mt-1">{errMsg.email}</p>
//             )}
//           </div>
//           <div className="mb-6">
//             <label
//               className=" flex ml-1  text-blue-500 text-sm font-bold mb-4"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Enter your password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {errMsg.password && (
//               <p className="text-red-500 mt-1">{errMsg.password}</p>
//             )}
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Login
//               {/* <Link to="/movies"></Link> */}
//             </button>
//           </div>
//         </form>
//         <div className="mt-4">
//           <p className="mb-4 font-medium">Don't have Account ?</p>
//           <button
//             type="submit"
//             className="m-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             <Link to="/signup">Sign Up</Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
