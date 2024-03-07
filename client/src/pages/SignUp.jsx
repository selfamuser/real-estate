import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl text-purple-800 text-center font-semibold">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4 mt-5 ">
        <input type="text" placeholder="Username" className="border p-3 rounded-lg" id="username" />
        <input type="email" placeholder="Email" className="border p-3 rounded-lg" id="email" />
        <input type="password" placeholder="Password" className="border p-3 rounded-lg" id="password" />
        <button className="bg-purple-800 text-white p-3 rounded-lg uppercase hover:opacity-80">Sign Up</button>
      </form>
      <div className="mt-3 text-center">
        <p>Already a user? 
        <Link to={"/sign-in"}>
          <span className="text-purple-600 font-bold"> Click here to Sign in...</span>
        </Link>
        </p>
      </div>
    </div>
    </>
  );
}
