import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="text-center mt-5 space-x-4">
      <Link
        to="/login"
        className=" px-5 py-2 text-white border-2 border-sky-500 border-solid text-2xl bg-blue-500 rounded"
      >
        Login
      </Link>{" "}
      <Link
        to="/signup"
        className=" px-5 py-2  text-center text-white border-2 border-sky-500 border-solid text-2xl bg-blue-500 rounded"
      >
        SignUp
      </Link>
    </div>
  );
};

export default NavBar;
