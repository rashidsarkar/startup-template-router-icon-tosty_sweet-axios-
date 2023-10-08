import { Link } from "react-router-dom";
import { SiGoogle } from "react-icons/si";

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-8 text-white bg-gray-800 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-semibold text-center mb-6 text-[#FF444A]">
          Create an Account
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-3 block w-full rounded-md bg-gray-700 text-gray-300 focus:ring focus:ring-[#FF444A] focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 block w-full rounded-md bg-gray-700 text-gray-300 focus:ring focus:ring-[#FF444A] focus:ring-opacity-50"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-300"
          >
            Profile Image (Link)
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="mt-1 p-3 block w-full rounded-md bg-gray-700 text-gray-300 focus:ring focus:ring-[#FF444A] focus:ring-opacity-50"
          />
        </div>
        <div className="mt-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-3 block w-full rounded-md bg-gray-700 text-gray-300 focus:ring focus:ring-[#FF444A] focus:ring-opacity-50"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#FF444A] w-full text-white py-3 px-4 rounded-md hover:bg-[#FF3333] transition duration-300 mt-6"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-300">
          <span className="text-sm text-gray-400">or</span>
        </p>
        <button className="mt-4 bg-[#4285F4] w-full text-white py-3 px-4 rounded-md hover:bg-[#357AE8] transition duration-300 flex items-center justify-center">
          <SiGoogle className="w-6 h-6 mr-2" />
          Sign Up with Google
        </button>
        <p className="mt-4 text-center text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FF444A] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
