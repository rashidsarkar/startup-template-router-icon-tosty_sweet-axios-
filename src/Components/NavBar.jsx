import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const user = false; // Replace with your actual authentication logic

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-pink-500 font-semibold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-pink-500 font-semibold"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li></li>
    </>
  );

  return (
    <div className="left-0 right-0 z-50 w-full mx-auto rounded-b-none bg-base-100 navbar ">
      <div className="w-full lg:w-[50%] navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-xl normal-case btn btn-ghost">daisyUI</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="inline-flex flex-row flex-wrap gap-3 p-2 px-1 text-xl font-semibold menuu menuu-horizontal">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          // User is authenticated, show user menu
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL || "photoURL"} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 w-[250px] z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box "
            >
              <li>
                <div className="flex flex-col px-4 py-3 ">
                  <span className="block text-sm text-pink-600 dark:text-white">
                    {user.displayName || "Display Name"}
                  </span>
                  <span className="block text-sm text-pink-400 truncate dark:text-gray-400">
                    {user.email || "Email"}
                  </span>
                </div>
              </li>

              <li className="mx-auto text-center text-pink-600">
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          // User is not authenticated, show login button
          <ul className="inline-flex flex-row flex-wrap gap-3 p-2 px-1 text-xl text-white menuu menuu-horizontal">
            <li>
              <NavLink
                to="/Login"
                className="inline-block rounded bg-pink-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-pink-600 hover:shadow-lg focus:bg-pink-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:focus:shadow-lg dark:active:shadow-md"
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
