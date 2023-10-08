import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-6 text-gray-300 bg-[#252D41]">
      <div className="container mx-auto text-center">
        <div className="md:flex md:justify-around">
          <div className="">
            <h3 className="mb-4 text-2xl font-bold">Contact Us</h3>
            <p className="mb-2">Email: contact@rongila.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="mt-6">
            <h3 className="mb-4 text-2xl font-bold">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-2xl text-white transition duration-300 hover:text-pink-600"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-2xl text-white transition duration-300 hover:text-pink-600"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-2xl text-white transition duration-300 hover:text-pink-600"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-2xl text-white transition duration-300 hover:text-pink-600"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm">
          &copy; {new Date().getFullYear()} Rongila. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
