import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import Link from "../../link";
import SVG from "react-inlinesvg";
import { useUser } from "@/hooks/useUser";

function NavDropdown({ onClick }) {
  const { user, logout } = useUser();
  const [isActive, setIsActive] = useState(false);

  NavDropdown.handleClickOutside = () => {
    setIsActive(false);
  };
  return (
    <div
      className="relative dropdown m-auto"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex font-inter--light font-15 mx-5 cursor-pointer">
        {" "}
        <SVG className="my-0 mx-5" src={`/svg/account.svg`}></SVG>
        {user ? user.user?.name : "Account"}
      </div>

      {isActive && (
        <div className={`dropdown-menu ${isActive ? "slide-down" : ""}`}>
          <ul className="flex flex-col">
            {user ? (
              <>
                {" "}
                <Link
                  to="/app/listings/create"
                  className="font-sm my-2 cursor-pointer"
                >
                  List your home
                </Link>
                <Link to="/" className="font-sm my-2 cursor-pointer">
                  Contact Support
                </Link>
                <hr />
                <p
                  className="font-sm my-2 cursor-pointer"
                  onClick={() => {
                    logout();
                    window.location.href = "/";
                  }}
                >
                  Sign-Out
                </p>
              </>
            ) : (
              <>
                {" "}
                <p
                  className="font-sm my-2 cursor-pointer"
                  onClick={() => onClick("create")}
                >
                  Create Acoount
                </p>
                <p
                  className="font-sm my-2 cursor-pointer"
                  onClick={() => onClick("login")}
                >
                  Login
                </p>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
const clickOutsideConfig = {
  handleClickOutside: () => NavDropdown.handleClickOutside,
};

export default onClickOutside(NavDropdown, clickOutsideConfig);
