import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const Header = () => {
  const route = useLocation();

  return (
    <div className="bg-black flex justify-around p-5 ">
      <div className="text-gray-100 hover:text-purple-400">
        <Link
          to="/"
          // className={`${
          //   route.pathname === "/"
          //     ? "header_menu_item_active"
          //     : "header_menu_item"
          // }`}
        >
          Home
        </Link>
        <Link to="/about" className="header_menu_item">
          َAbout
        </Link>
        <Link to="/contact" className="header_menu_item">
          Contact
        </Link>
        <Link to="/order" className="header_menu_item">
          Order
        </Link>
        <Link to="/details" className="header_menu_item">
          Test
        </Link>
        <Link to="/person" className="header_menu_item">
          Person
        </Link>
      </div>
      <div>
        <img className="icon" src="/logo192.png" />
      </div>
    </div>
  );
};

export default Header;
