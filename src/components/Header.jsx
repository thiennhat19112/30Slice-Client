import { NavLink, Link } from "react-router-dom";
import Categories from "./Categories";

const Header = () => {
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
            <a  className="sidebar-toggle">
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
                  <li className="has-subMenu">
                    <a href="#" className="">
                      Layouts
                    </a>
                    <ul className="subMenu">
                      <li className="l_sidebar">
                        <a href="#" data-layout="light">
                          Light Mode
                        </a>
                      </li>
                      <li className="l_sidebar">
                        <a href="#" data-layout="dark">
                          Dark Mode
                        </a>
                      </li>
                      <li className="l_navbar">
                        <a href="#" data-layout="top">
                          Top Menu
                        </a>
                      </li>
                      <li className="l_navbar">
                        <a href="#" data-layout="side">
                          Side Menu
                        </a>
                      </li>
                      <li className="layout">
                        <a href="../rtl">RTL</a>
                      </li>
                      <li className="layout">
                        <a href="../ltr">LTR</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-subMenu">
                    <a href="#" className="">
                      Apps
                    </a>
                    <ul className="subMenu">
                      <li>
                        <a href="chat.html" className="">
                          <span
                            data-feather="message-square"
                            className="nav-icon"
                          />
                          <span className="menu-text">Chat</span>
                        </a>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span
                            data-feather="shopping-cart"
                            className="nav-icon"
                          />
                          <span className="menu-text">eCommerce</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a href="products.html" className="">
                              Products
                            </a>
                          </li>
                          <li>
                            <a href="product-details.html" className="">
                              Product Details
                            </a>
                          </li>
                          <li>
                            <a href="add-product.html" className="">
                              Product Add
                            </a>
                          </li>
                          <li>
                            <a href="" className="">
                              Product Edit
                            </a>
                          </li>
                          <li>
                            <a href="cart.html" className="">
                              Cart
                            </a>
                          </li>
                          <li>
                            <a href="order.html" className="">
                              Orders
                            </a>
                          </li>
                          <li>
                            <a href="sellers.html" className="">
                              Sellers
                            </a>
                          </li>
                          <li>
                            <a href="invoice.html" className="">
                              Invoices
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span data-feather="mail" className="nav-icon" />
                          <span className="menu-text">Email</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a href="inbox.html" className="">
                              Inbox
                            </a>
                          </li>
                          <li>
                            <a href="read-email.html" className="">
                              Read Email
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="chat.html" className="">
                          <span data-feather="bookmark" className="nav-icon" />
                          <span className="menu-text">Note</span>
                        </a>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span data-feather="user" className="nav-icon" />
                          <span className="menu-text">â</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a href="profile.html" className="">
                              Profile
                            </a>
                          </li>
                          <li>
                            <a href="profile-setting.html" className="">
                              Profile Settings
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span
                            data-feather="user-check"
                            className="nav-icon"
                          />
                          <span className="menu-text">Contact</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a className="" href="contact-1.html">
                              Contact 1
                            </a>
                          </li>
                          <li>
                            <a className="" href="contact-2.html">
                              Contact 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="chat.html" className="">
                          <span data-feather="activity" className="nav-icon" />
                          <span className="menu-text">To-Do</span>
                        </a>
                      </li>
                      <li>
                        <a href="kanban.html" className="">
                          <span data-feather="columns" className="nav-icon" />
                          <span className="menu-text">Kanban Board</span>
                        </a>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span data-feather="repeat" className="nav-icon" />
                          <span className="menu-text">Import &amp; Export</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a className="" href="import.html">
                              Import
                            </a>
                          </li>
                          <li>
                            <a className="" href="export.html">
                              Export
                            </a>
                          </li>
                          <li>
                            <a className="" href="export-selected.html">
                              Export Selected
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="file-manager.html" className="">
                          <span data-feather="file" className="nav-icon" />
                          <span className="menu-text">File Manager</span>
                        </a>
                      </li>
                      <li>
                        <a href="task-app.html" className="">
                          <span data-feather="clipboard" className="nav-icon" />
                          <span className="menu-text">Task App</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-item has-subMenu">
                    <a href="#" className="">
                      Pages
                    </a>
                    <ul className="megaMenu-wrapper megaMenu-small">
                      <li>
                        <ul>
                          <li>
                            <a href="projects.html" className="">
                              Project
                            </a>
                          </li>
                          <li>
                            <a href="application-ui.html" className="">
                              Project Details
                            </a>
                          </li>
                          <li>
                            <a href="create.html" className="">
                              Create Project
                            </a>
                          </li>
                          <li>
                            <a href="users-card.html" className="">
                              Team
                            </a>
                          </li>
                          <li>
                            <a href="users-card2.html" className="">
                              Users
                            </a>
                          </li>
                          <li>
                            <a href="user-info.html" className="">
                              Users Info
                            </a>
                          </li>
                          <li>
                            <a href="users-list.html" className="">
                              Users List
                            </a>
                          </li>
                          <li>
                            <a href="users-group.html" className="">
                              Users Group
                            </a>
                          </li>
                          <li>
                            <a href="banner.html" className="">
                              <span className="menu-text">Banners</span>
                            </a>
                          </li>
                          <li>
                            <a href="testimonial.html" className="">
                              <span className="menu-text">Testimonial</span>
                            </a>
                          </li>
                          <li>
                            <a href="support.html" className="">
                              <span className="menu-text">Support Center</span>
                            </a>
                          </li>
                          <li>
                            <a href="dynamic-table.html" className="">
                              <span className="menu-text">Dynamic Table</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <a href="users-datatable.html" className="">
                              Users Table
                            </a>
                          </li>
                          <li>
                            <a href="gallery.html" className="">
                              Gallery 1
                            </a>
                          </li>
                          <li>
                            <a href="gallery2.html" className="">
                              Gallery 2
                            </a>
                          </li>
                          <li>
                            <a href="pricing.html" className="">
                              Pricing
                            </a>
                          </li>
                          <li>
                            <a href="faq.html" className="">
                              FAQ's
                            </a>
                          </li>
                          <li>
                            <a href="search.html" className="">
                              Search Results
                            </a>
                          </li>
                          <li>
                            <a href="maintenance.html" className="">
                              Coming Soon
                            </a>
                          </li>
                          <li>
                            <a href="404.html" className="">
                              404
                            </a>
                          </li>
                          <li>
                            <a href="maintenance.html" className="">
                              <span className="menu-text">Maintenance</span>
                            </a>
                          </li>
                          <li>
                            <a href="login.html" className="">
                              <span className="menu-text">Log In</span>
                            </a>
                          </li>
                          <li>
                            <a href="sign-up.html" className="">
                              <span className="menu-text">Sign Up</span>
                            </a>
                          </li>
                          <li>
                            <a href="blank.html" className="">
                              <span className="menu-text">Blank</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="has-subMenu">
                    <a href="#" className="">
                      Features
                    </a>
                    <ul className="subMenu">
                      <li>
                        <a href="editors.html" className="">
                          <span data-feather="edit" className="nav-icon" />
                          <span className="menu-text">Editors</span>
                        </a>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span data-feather="grid" className="nav-icon" />
                          <span className="menu-text">Icons</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a href="feather.html" className="">
                              Feather icons (svg)
                            </a>
                          </li>
                          <li>
                            <a href="fontawesome.html" className="">
                              Font Awesome
                            </a>
                          </li>
                          <li>
                            <a href="lineawesome.html" className="">
                              Line Awesome
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span
                            data-feather="bar-chart-2"
                            className="nav-icon"
                          />
                          <span className="menu-text">Charts</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a className="" href="charts.html">
                              Chart JS
                            </a>
                          </li>
                          <li>
                            <a className="" href="google-chart.html">
                              Google Charts
                            </a>
                          </li>
                          <li>
                            <a className="" href="peity-chart.html">
                              Peity Charts
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span data-feather="disc" className="nav-icon" />
                          <span className="menu-text">Froms</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a className="" href="form.html">
                              Basics
                            </a>
                          </li>
                          <li>
                            <a className="" href="form-layouts.html">
                              Layouts
                            </a>
                          </li>
                          <li>
                            <a className="" href="form-elements.html">
                              Elements
                            </a>
                          </li>
                          <li>
                            <a className="" href="form-components.html">
                              Components
                            </a>
                          </li>
                          <li>
                            <a className="" href="form-validations.html">
                              Validations
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span data-feather="map" className="nav-icon" />
                          <span className="menu-text">Maps</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a href="google-map.html" className="">
                              Google Maps
                            </a>
                          </li>
                          <li>
                            <a href="leaflet-map.html" className="">
                              Leaflet Maps
                            </a>
                          </li>
                          <li>
                            <a href="vector-map.html" className="">
                              Vector Maps
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span data-feather="server" className="nav-icon" />
                          <span className="menu-text">Widget</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a className="" href="widget-charts.html">
                              Chart
                            </a>
                          </li>
                          <li>
                            <a className="" href="widget-mixed.html">
                              Mixed
                            </a>
                          </li>
                          <li>
                            <a className="" href="widget-card.html">
                              Card
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span data-feather="square" className="nav-icon" />
                          <span className="menu-text">Wizards</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a href="checkout-wizard6.html" className="">
                              Wizard 1
                            </a>
                          </li>
                          <li>
                            <a href="checkout-wizard7.html" className="">
                              Wizard 2
                            </a>
                          </li>
                          <li>
                            <a href="checkout-wizard8.html" className="">
                              Wizard 3
                            </a>
                          </li>
                          <li>
                            <a href="checkout-wizard9.html" className="">
                              Wizard 4
                            </a>
                          </li>
                          <li>
                            <a href="checkout-wizard10.html" className="">
                              Wizard 5
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span data-feather="book" className="nav-icon" />
                          <span className="menu-text">Knowledge Base</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a className="" href="knowledgebase.html">
                              Knowledge Base
                            </a>
                          </li>
                          <li>
                            <a className="" href="knowledgebase-2.html">
                              All Article
                            </a>
                          </li>
                          <li>
                            <a className="" href="knowledgebase-3.html">
                              Single Article
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ends: navbar-left */}
          <div className="navbar-right">
            <ul className="navbar-right__menu">
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
