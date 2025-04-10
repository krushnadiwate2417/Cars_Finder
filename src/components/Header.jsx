import { useLocation, useNavigate } from "react-router-dom";
import { HEADER_LOGO } from "../constants/constant";

const Header = () => {
  const navigate = useNavigate();
  const path = useLocation();

  const handleNavigate = () => {
    if (path.pathname === "/") {
      navigate("/wishList");
    } else {
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={HEADER_LOGO} width={130} alt="Logo" className="object-contain" />
        <h1 className="text-xl font-semibold text-gray-800">DriveFinder</h1>
      </div>
      <button
        onClick={handleNavigate}
        className="px-5 cursor-pointer py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
      >
        {path.pathname === "/" ? "WishList" : "Home"}
      </button>
    </header>
  );
};

export default Header;
