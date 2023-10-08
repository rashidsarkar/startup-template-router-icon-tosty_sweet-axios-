import React from "react";

const NotFound = () => {
  const styleBg = {
    backgroundImage: "url(https://i.ibb.co/dkRgR86/cool-background-1.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="relative z-10" style={styleBg}>
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-700 bg-white bg-opacity-90">
        <div className="text-6xl font-extrabold">404</div>
        <div className="text-2xl font-semibold">Oops! Page not found.</div>
        <p className="mt-4 text-lg">
          The page you are looking for might have been removed or does not
          exist.
        </p>
        <a
          href="/"
          className="text-#252D41 hover:underline mt-4 text-lg font-semibold"
        >
          Go back to the homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
