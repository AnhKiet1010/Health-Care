import { Link, useLocation } from "react-router-dom";

import LOGO from "@/logo.svg";
import routes from "@/Routes";
import SubMenu from "./SubMenu";

function Header() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="w-full h-16 bg-gray">
      <div className="container h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={LOGO} alt="health-care-logo" className="w-28" />
        </Link>
        <div className="flex gap-7">
          {routes.map((route) => {
            const { path, title, icon, subRoutes } = route;
            return subRoutes ? (
              <SubMenu key={path} route={route} />
            ) : (
              <Link
                key={path}
                to={path}
                className="flex items-center hover:opacity-80"
              >
                {icon ? icon : ""}
                {title ? (
                  <span
                    className={`text-light ml-2 ${
                      pathname === path ? "text-orange" : ""
                    }`}
                  >
                    {title}
                  </span>
                ) : (
                  ""
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
