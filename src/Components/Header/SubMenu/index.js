import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CloseIcon } from "@/assets/icons";

function SubMenu({ route }) {
  const { icon, subRoutes } = route;
  const [showSubMenu, setShowSubMenu] = useState(false);
  const ref = useRef(null);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowSubMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div className="cursor-pointer" onClick={toggleSubMenu}>
        {showSubMenu ? <CloseIcon /> : icon}
      </div>
      <div
        className={`absolute w-64 right-0 ${
          showSubMenu ? "flex" : "hidden"
        } flex-col bg-gray-light `}
      >
        {subRoutes.map((subRoute) => (
          <Link
            key={subRoute.path}
            to={subRoute.path}
            className={`w-full px-8 py-5 border-light border-b border-opacity-20 text-light hover:opacity-80`}
          >
            {subRoute.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SubMenu;
