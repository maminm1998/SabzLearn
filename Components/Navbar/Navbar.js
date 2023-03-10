import React, { useContext } from "react";
import { useEffect, useState } from "react";
import AuthContext from "../../Context/authContext";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [allMenu, setAllMenu] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:4000/v1/menus`)
      .then((res) => res.json())
      .then((data) => setAllMenu(data))
    
  }, []);

  const authContext = useContext(AuthContext);
  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <img
              src="/images/logo/Logo.png"
              className="main-header__logo"
              alt="لوگوی سبزلرن"
            />

            <ul className="main-header__menu">
              
              {allMenu.map((menu) => (
                <li className="main-header__item" id={menu.id}>
                  <Link to={menu.href} className="main-header__link">
                    {menu.title}
                    

                    {menu.submenus.length != 0 && (
                      <>

                      <i className="fas fa-angle-down main-header__link-icon"></i>
                      <ul className="main-header__dropdown">
                        {menu.submenus.map((submenu) => (
                          <li
                            className="main-header__dropdown-item"
                            id={submenu.id}
                          >
                            <Link
                              to={submenu.href}
                              className="main-header__dropdown-link">
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="main-header__left">
            <a href="#" className="main-header__search-btn">
              <i className="fas fa-search main-header__search-icon"></i>
            </a>
            <a href="#" className="main-header__cart-btn">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>
            {authContext.isLoggined ? (
              <Link to="#" className="main-header__profile">
                <span className="main-header__profile-text">
                  {authContext.userInfo.name}
                </span>
              </Link>
            ) : (
              <Link to="/login" className="main-header__profile">
                <span className="main-header__profile-text">ورود/ثبت نام</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
