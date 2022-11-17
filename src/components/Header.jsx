import { NavLink, Link } from "react-router-dom";
import Categories from "./Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
const Header = () => {
  const cartLength = useSelector((state) => state.cart.length);
  const UserInfo = useSelector((state) => state.user);
  return (
    <>
      <div className="mobile-search">
        <form className="search-form">
          <span data-feather="search" />
          <input
            className="form-control mr-sm-2 box-shadow-none"
            type="text"
            placeholder="Search..."
          />
        </form>
      </div>
      <div className="mobile-author-actions" />
      <header className="header-top">
        <nav className="navbar navbar-light">
          <div className="navbar-left">
            <a className="sidebar-toggle">
              <img className="svg" src="assets/img/svg/bars.svg" alt="img" />
            </a>
            <Link className="navbar-brand" to="/">
              <img
                className="dark"
                src="/assets/images/logo30slice.png"
                alt="svg"
              />
            </Link>
            <form action="/" className="search-form">
              <span data-feather="search" />
              <input
                className="form-control mr-sm-2 box-shadow-none"
                type="text"
                placeholder="Search..."
              />
            </form>
            <div className="top-menu">
              <div className="strikingDash-top-menu position-relative">
                <ul>
                  <li>
                    <NavLink exact="true" to="/">
                      Trang Chủ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact="true" to="/booking">
                      Đặt Lịch
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact="true" to="/products">
                      Sản Phẩm
                    </NavLink>
                  </li>
                  <Categories />
                  <li>
                    <NavLink exact="true" to="/news">
                      Tin tức
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ends: navbar-left */}
          <div className="navbar-right">
            <ul className="navbar-right__menu">
              <NavLink to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="badge badge-red color-dark">
                  <div className="badge-dot-wrap">
                    <span className="badge badge-danger badge- badge-sm">
                      {cartLength}
                    </span>
                  </div>
                </div>
              </NavLink>

              <li className="nav-search d-none">
                <a href="#" className="search-toggle">
                  <i className="la la-search" />
                  <i className="la la-times" />
                </a>
                <form action="/" className="search-form-topMenu">
                  <span className="search-icon" data-feather="search" />
                  <input
                    className="form-control mr-sm-2 box-shadow-none"
                    type="text"
                    placeholder="Search..."
                  />
                </form>
              </li>
              {UserInfo.isLogin ? (
                <li className="nav-author">
                  <div className="dropdown-custom">
                    <a href="#" className="nav-item-toggle">
                      <img
                        src="/assets/img/author-nav.jpg"
                        alt=""
                        className="rounded-circle"
                      />
                    </a>
                    <div className="dropdown-wrapper">
                      <div className="nav-author__info">
                        <div className="author-img">
                          <img
                            src="/assets/img/author-nav.jpg"
                            alt=""
                            className="rounded-circle"
                          />
                        </div>
                        <div>
                          <h6>ADMIN</h6>
                          <span>ADMIN</span>
                        </div>
                      </div>
                      <div className="nav-author__options">
                        <ul>
                          <li>
                            <Link to="/profile">
                              <span data-feather="user" /> Thông tin tài khoản
                            </Link>
                          </li>
                          <li>
                            <a href="">
                              <span data-feather="settings" /> Settings
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span data-feather="key" /> Billing
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span data-feather="users" /> Activity
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <span data-feather="bell" /> Help
                            </a>
                          </li>
                        </ul>
                        <a className="nav-author__signout">
                          <span data-feather="log-out" /> Đăng xuất
                        </a>
                      </div>
                    </div>
                    {/* ends: .dropdown-wrapper */}
                  </div>
                </li>
              ) : (
                <li>
                  <NavLink exact="true" to="/login">
                    <i class="fa-solid fa-right-to-bracket"></i> Đăng nhập
                  </NavLink>
                </li>
              )}

              {/* ends: .nav-author */}
            </ul>
            {/* ends: .navbar-right__menu */}
            <div className="navbar-right__mobileAction d-md-none">
              <a href="#" className="btn-search">
                <span data-feather="search" />
                <span data-feather="x" />
              </a>
              <a href="#" className="btn-author-action">
                <span data-feather="more-vertical" />
              </a>
            </div>
          </div>
          {/* ends: .navbar-right */}
        </nav>
      </header>
    </>
  );
};

export default Header;
