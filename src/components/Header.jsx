import { Link } from "react-router-dom";

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
            <a href="#" className="sidebar-toggle">
              <img className="svg" src="/assets/img/svg/bars.svg" alt="img" />
            </a>
            <a className="navbar-brand" href="#">
              <img className="dark" src="/assets/img/logo_dark.png" alt="svg" />
              <img
                className="light"
                src="/assets/img/logo_white.png"
                alt="img"
              />
            </a>
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
                  <li className="has-subMenu">
                    <a href="#" className="active">
                      Dashboard
                    </a>
                    <ul className="subMenu">
                      <li>
                        <a className="" href="index.html">
                          Social Media
                        </a>
                      </li>
                      <li>
                        <a className="" href="business.html">
                          FineTech / Business
                        </a>
                      </li>
                      <li>
                        <a className="" href="performance.html">
                          Site Performance
                        </a>
                      </li>
                      <li>
                        <a className="active" href="ecommerce.html">
                          Ecommerce
                        </a>
                      </li>
                      <li>
                        <a className="" href="crm.html">
                          CRM
                        </a>
                      </li>
                      <li>
                        <a className="" href="sales.html">
                          Sales Performance
                        </a>
                      </li>
                    </ul>
                  </li>
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
                  <li className="has-subMenu">
                    <a href="#" className="">
                      Crud
                    </a>
                    <ul className="subMenu">
                      <li className="has-subMenu-left">
                        <a href="#" className="">
                          <span
                            data-feather="shopping-cart"
                            className="nav-icon"
                          />
                          <span className="menu-text">Firestore Crud</span>
                        </a>
                        <ul className="subMenu">
                          <li>
                            <a className="" href="firestore.html">
                              View All
                            </a>
                          </li>
                          <li>
                            <a className="" href="firestore-add.html">
                              Add New
                            </a>
                          </li>
                        </ul>
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
                  <li className="mega-item has-subMenu">
                    <a href="#" className="">
                      Components
                    </a>
                    <ul className="megaMenu-wrapper megaMenu-wide">
                      <li>
                        <span className="mega-title">Components</span>
                        <ul>
                          <li>
                            <a className="" href="alert.html">
                              Alert
                            </a>
                          </li>
                          <li>
                            <a className="" href="avatar.html">
                              Avatar
                            </a>
                          </li>
                          <li>
                            <a className="" href="badge.html">
                              Badge
                            </a>
                          </li>
                          <li>
                            <a className="" href="breadcrumbs.html">
                              Breadcrumb
                            </a>
                          </li>
                          <li>
                            <a className="" href="buttons.html">
                              Button
                            </a>
                          </li>
                          <li>
                            <a className="" href="cards.html">
                              Cards
                            </a>
                          </li>
                          <li>
                            <a className="" href="carousel.html">
                              Carousel
                            </a>
                          </li>
                          <li>
                            <a className="" href="checkbox.html">
                              Checkbox
                            </a>
                          </li>
                          <li>
                            <a className="" href="collapse.html">
                              Collapse
                            </a>
                          </li>
                          <li>
                            <a className="" href="comments.html">
                              Comments
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-title">Components</span>
                        <ul>
                          <li>
                            <a className="" href="dashboard-base.html">
                              Dashboard Base
                            </a>
                          </li>
                          <li>
                            <a className="" href="date-picker.html">
                              DatePicker
                            </a>
                          </li>
                          <li>
                            <a className="" href="drawer.html">
                              Drawer
                            </a>
                          </li>
                          <li>
                            <a className="" href="drag-drop.html">
                              Drag &amp; Drop
                            </a>
                          </li>
                          <li>
                            <a className="" href="dropdown.html">
                              Dropdown
                            </a>
                          </li>
                          <li>
                            <a className="" href="empty.html">
                              Empty
                            </a>
                          </li>
                          <li>
                            <a className="" href="input.html">
                              Input
                            </a>
                          </li>
                          <li>
                            <a className="" href="list.html">
                              List
                            </a>
                          </li>
                          <li>
                            <a className="" href="menu.html">
                              Menu
                            </a>
                          </li>
                          <li>
                            <a className="" href="message.html">
                              Message
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-title">Components</span>
                        <ul>
                          <li>
                            <a className="" href="modal.html">
                              Modals
                            </a>
                          </li>
                          <li>
                            <a className="" href="notifications.html">
                              Notification
                            </a>
                          </li>
                          <li>
                            <a className="" href="page-header.html">
                              Page Headers
                            </a>
                          </li>
                          <li>
                            <a className="" href="pagination.html">
                              Paginations
                            </a>
                          </li>
                          <li>
                            <a className="" href="progressbar.html">
                              Progress
                            </a>
                          </li>
                          <li>
                            <a className="" href="radio.html">
                              Radio
                            </a>
                          </li>
                          <li>
                            <a className="" href="rate.html">
                              Rate
                            </a>
                          </li>
                          <li>
                            <a className="" href="result.html">
                              Result
                            </a>
                          </li>
                          <li>
                            <a className="" href="select.html">
                              Select
                            </a>
                          </li>
                          <li>
                            <a className="" href="skeleton.html">
                              Skeleton
                            </a>
                          </li>
                          <li>
                            <a className="" href="time-picker.html">
                              Timepicker
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-title">Components</span>
                        <ul>
                          <li>
                            <a className="" href="slider.html">
                              Slider
                            </a>
                          </li>
                          <li>
                            <a className="" href="spin.html">
                              Spinner
                            </a>
                          </li>
                          <li>
                            <a className="" href="statistics.html">
                              Statistic
                            </a>
                          </li>
                          <li>
                            <a className="" href="steps.html">
                              Steps
                            </a>
                          </li>
                          <li>
                            <a className="" href="switch.html">
                              Switch
                            </a>
                          </li>
                          <li>
                            <a className="" href="tab.html">
                              Tabs
                            </a>
                          </li>
                          <li>
                            <a className="" href="tag.html">
                              Tags
                            </a>
                          </li>
                          <li>
                            <a className="" href="timeline.html">
                              Timeline
                            </a>
                          </li>
                          <li>
                            <a className="" href="timeline-2.html">
                              Timeline 2
                            </a>
                          </li>
                          <li>
                            <a className="" href="timeline-3.html">
                              Timeline 3
                            </a>
                          </li>
                          <li>
                            <a className="" href="uploads.html">
                              Upload
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
              <li className="nav-message">
                <div className="dropdown-custom">
                  <a href="#" className="nav-item-toggle">
                    <span data-feather="mail" />
                  </a>
                  <div className="dropdown-wrapper">
                    <h2 className="dropdown-wrapper__title">
                      Messages{' '}
                      <span className="badge-circle badge-success ml-1">2</span>
                    </h2>
                    <ul>
                      <li className="author-online has-new-message">
                        <div className="user-avater">
                          <img src="/assets/img/team-1.png" alt="" />
                        </div>
                        <div className="user-message">
                          <p>
                            <a
                              href=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              Web Design
                            </a>
                            <span className="time-posted">3 hrs ago</span>
                          </p>
                          <p>
                            <span
                              className="desc text-truncate"
                              style={{ maxWidth: 215 }}
                            >
                              Lorem ipsum dolor amet cosec Lorem ipsum
                            </span>
                            <span className="msg-count badge-circle badge-success badge-sm">
                              1
                            </span>
                          </p>
                        </div>
                      </li>
                      <li className="author-offline has-new-message">
                        <div className="user-avater">
                          <img src="/assets/img/team-1.png" alt="" />
                        </div>
                        <div className="user-message">
                          <p>
                            <a
                              href=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              Web Design
                            </a>
                            <span className="time-posted">3 hrs ago</span>
                          </p>
                          <p>
                            <span
                              className="desc text-truncate"
                              style={{ maxWidth: 215 }}
                            >
                              Lorem ipsum dolor amet cosec Lorem ipsum
                            </span>
                            <span className="msg-count badge-circle badge-success badge-sm">
                              1
                            </span>
                          </p>
                        </div>
                      </li>
                      <li className="author-online has-new-message">
                        <div className="user-avater">
                          <img src="/assets/img/team-1.png" alt="" />
                        </div>
                        <div className="user-message">
                          <p>
                            <a
                              href=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              Web Design
                            </a>
                            <span className="time-posted">3 hrs ago</span>
                          </p>
                          <p>
                            <span
                              className="desc text-truncate"
                              style={{ maxWidth: 215 }}
                            >
                              Lorem ipsum dolor amet cosec Lorem ipsum
                            </span>
                            <span className="msg-count badge-circle badge-success badge-sm">
                              1
                            </span>
                          </p>
                        </div>
                      </li>
                      <li className="author-offline">
                        <div className="user-avater">
                          <img src="/assets/img/team-1.png" alt="" />
                        </div>
                        <div className="user-message">
                          <p>
                            <a
                              href=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              Web Design
                            </a>
                            <span className="time-posted">3 hrs ago</span>
                          </p>
                          <p>
                            <span
                              className="desc text-truncate"
                              style={{ maxWidth: 215 }}
                            >
                              Lorem ipsum dolor amet cosec Lorem ipsum
                            </span>
                          </p>
                        </div>
                      </li>
                      <li className="author-offline">
                        <div className="user-avater">
                          <img src="/assets/img/team-1.png" alt="" />
                        </div>
                        <div className="user-message">
                          <p>
                            <a
                              href=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              Web Design
                            </a>
                            <span className="time-posted">3 hrs ago</span>
                          </p>
                          <p>
                            <span
                              className="desc text-truncate"
                              style={{ maxWidth: 215 }}
                            >
                              Lorem ipsum dolor amet cosec Lorem ipsum
                            </span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <a href="" className="dropdown-wrapper__more">
                      See All Message
                    </a>
                  </div>
                </div>
              </li>
              {/* ends: nav-message */}
              <li className="nav-notification">
                <div className="dropdown-custom">
                  <a href="#" className="nav-item-toggle">
                    <span data-feather="bell" />
                  </a>
                  <div className="dropdown-wrapper">
                    <h2 className="dropdown-wrapper__title">
                      Notifications{' '}
                      <span className="badge-circle badge-warning ml-1">4</span>
                    </h2>
                    <ul>
                      <li className="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                        <div className="nav-notification__type nav-notification__type--primary">
                          <span data-feather="inbox" />
                        </div>
                        <div className="nav-notification__details">
                          <p>
                            <a
                              href=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              James
                            </a>
                            <span>sent you a message</span>
                          </p>
                          <p>
                            <span className="time-posted">5 hours ago</span>
                          </p>
                        </div>
                      </li>
                      <li className="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                        <div className="nav-notification__type nav-notification__type--secondary">
                          <span data-feather="upload" />
                        </div>
                        <div className="nav-notification__details">
                          <p>
                            <a
                              href=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              James
                            </a>
                            <span>sent you a message</span>
                          </p>
                          <p>
                            <span className="time-posted">5 hours ago</span>
                          </p>
                        </div>
                      </li>
                      <li className="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                        <div className="nav-notification__type nav-notification__type--success">
                          <span data-feather="log-in" />
                        </div>
                        <div className="nav-notification__details">
                          <p>
                            <a
                              href=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              James
                            </a>
                            <span>sent you a message</span>
                          </p>
                          <p>
                            <span className="time-posted">5 hours ago</span>
                          </p>
                        </div>
                      </li>
                      <li className="nav-notification__single nav-notification__single d-flex flex-wrap">
                        <div className="nav-notification__type nav-notification__type--info">
                          <span data-feather="at-sign" />
                        </div>
                        <div className="nav-notification__details">
                          <p>
                            <a
                              href=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              James
                            </a>
                            <span>sent you a message</span>
                          </p>
                          <p>
                            <span className="time-posted">5 hours ago</span>
                          </p>
                        </div>
                      </li>
                      <li className="nav-notification__single nav-notification__single d-flex flex-wrap">
                        <div className="nav-notification__type nav-notification__type--danger">
                          <span data-feather="heart" />
                        </div>
                        <div className="nav-notification__details">
                          <p>
                            <a
                              href=""
                              className="subject stretched-link text-truncate"
                              style={{ maxWidth: 180 }}
                            >
                              James
                            </a>
                            <span>sent you a message</span>
                          </p>
                          <p>
                            <span className="time-posted">5 hours ago</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <a href="" className="dropdown-wrapper__more">
                      See all incoming activity
                    </a>
                  </div>
                </div>
              </li>
              {/* ends: .nav-notification */}
              <li className="nav-settings">
                <div className="dropdown-custom">
                  <a href="#" className="nav-item-toggle">
                    <span data-feather="settings" />
                  </a>
                  <div className="dropdown-wrapper dropdown-wrapper--large">
                    <ul className="list-settings">
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="/assets/img/mail.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="" className="stretched-link">
                              All Features
                            </a>
                          </h6>
                          <p>Introducing Increment subscriptions </p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="/assets/img/color-palette.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="" className="stretched-link">
                              Themes
                            </a>
                          </h6>
                          <p>Third party themes that are compatible</p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="/assets/img/home.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="" className="stretched-link">
                              Payments
                            </a>
                          </h6>
                          <p>We handle billions of dollars</p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="/assets/img/video-camera.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="" className="stretched-link">
                              Design Mockups
                            </a>
                          </h6>
                          <p>Share planning visuals with clients</p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="/assets/img/document.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="" className="stretched-link">
                              Content Planner
                            </a>
                          </h6>
                          <p>Centralize content gethering and editing</p>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div className="mr-3">
                          <img src="/assets/img/microphone.png" alt="" />
                        </div>
                        <div className="flex-grow-1">
                          <h6>
                            <a href="" className="stretched-link">
                              Diagram Maker
                            </a>
                          </h6>
                          <p>Plan user flows &amp; test scenarios</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* ends: .nav-settings */}
              <li className="nav-support">
                <div className="dropdown-custom">
                  <a href="#" className="nav-item-toggle">
                    <span data-feather="help-circle" />
                  </a>
                  <div className="dropdown-wrapper">
                    <div className="list-group">
                      <span>Documentation</span>
                      <ul>
                        <li>
                          <a href="">How to customize admin</a>
                        </li>
                        <li>
                          <a href="">How to use</a>
                        </li>
                        <li>
                          <a href="">The relation of vertical spacing</a>
                        </li>
                      </ul>
                    </div>
                    <div className="list-group">
                      <span>Payments</span>
                      <ul>
                        <li>
                          <a href="">How to customize admin</a>
                        </li>
                        <li>
                          <a href="">How to use</a>
                        </li>
                      </ul>
                    </div>
                    <div className="list-group">
                      <span>Content Planner</span>
                      <ul>
                        <li>
                          <a href="">How to customize admin</a>
                        </li>
                        <li>
                          <a href="">How to use</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* ends: .nav-support */}
              <li className="nav-flag-select">
                <div className="dropdown-custom">
                  <a href="#" className="nav-item-toggle">
                    <img
                      src="/assets/img/flag.png"
                      alt=""
                      className="rounded-circle"
                    />
                  </a>
                  <div className="dropdown-wrapper dropdown-wrapper--small">
                    <a href="">
                      <img src="/assets/img/eng.png" alt="" /> English
                    </a>
                    <a href="">
                      <img src="/assets/img/ger.png" alt="" /> German
                    </a>
                    <a href="">
                      <img src="/assets/img/spa.png" alt="" /> Spanish
                    </a>
                    <a href="">
                      <img src="/assets/img/tur.png" alt="" /> Turkish
                    </a>
                  </div>
                </div>
              </li>
              {/* ends: .nav-flag-select */}
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
                      <a  className="nav-author__signout">
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
