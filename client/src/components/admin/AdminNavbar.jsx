import { Link } from "react-router-dom";
import film_fiesta_logo from "../assets/film_fiesta_logo.png";

const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-gray-300/30">
      <Link to="/">
        <img src={film_fiesta_logo} alt="logo" className="w-36 h-auto" />
      </Link>
    </div>
  );
};

export default AdminNavbar;
