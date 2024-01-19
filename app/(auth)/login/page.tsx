"use client";

import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/schemas";
type Props = {};

const page = (props: Props) => {
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values, actions) => {
        console.log("submitted")
        actions.resetForm(); // after submission to clear the fields
      },
    });

  // console.log(values);
  console.log(errors);

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <Link href={"/"}>
                <IoHome color={"#0D6EFD"} />
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur} // to check whether click on the field
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
                {errors.email && touched.email && (
                  <p className="text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                disabled={isSubmitting} // 
              >
                Sign in
              </button>

              <div className="flex gap-3">
                <button className="w-full text-gray-800  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-1 border-gray-600">
                  <p className="inline">
                    Login with
                    <span>
                      <FcGoogle className="inline ms-2" size={25} />
                    </span>
                  </p>
                </button>

                <button className="w-full text-gray-800  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-1 border-gray-600">
                  <p className="inline">
                    Login with
                    <span>
                      <IoLogoGithub className="inline ms-2" size={25} />
                    </span>
                  </p>
                </button>
              </div>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="sign-up"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

// import Link from "next/link";
// import React from "react";
// import { FcGoogle } from "react-icons/fc";
// import { IoLogoGithub } from "react-icons/io5";
// import { IoHome } from "react-icons/io5";

// type Props = {};
// const page = (props: Props) => {
//   return (

//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <div className="flex justify-between items-center">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                 Sign in to your account
//               </h1>
//               <Link href={"/"}>
//                 <IoHome color={"#0D6EFD"} />
//               </Link>
//             </div>

//             <form className="space-y-4 md:space-y-6" action="#">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="name@company.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   required
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="remember"
//                       aria-describedby="remember"
//                       type="checkbox"
//                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                       required
//                     />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label
//                       htmlFor="remember"
//                       className="text-gray-500 dark:text-gray-300"
//                     >
//                       Remember me
//                     </label>
//                   </div>
//                 </div>
//                 <a
//                   href="#"
//                   className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   Forgot password?
//                 </a>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//               >
//                 Sign in
//               </button>

//               <div className="flex gap-3">
//                 <button className="w-full text-gray-800  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-1 border-gray-600">
//                   <p className="inline">
//                     Login with
//                     <span>
//                       <FcGoogle className="inline ms-2" size={25} />
//                     </span>
//                   </p>
//                 </button>

//                 <button className="w-full text-gray-800  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-1 border-gray-600">
//                   <p className="inline">
//                     Login with
//                     <span>
//                       <IoLogoGithub className="inline ms-2" size={25} />
//                     </span>
//                   </p>
//                 </button>
//               </div>

//               <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                 Don’t have an account yet?{" "}
//                 <Link
//                   href="sign-up"
//                   className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   Sign up
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default page;
