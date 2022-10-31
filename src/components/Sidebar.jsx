const Sidebar = () => {
    return (
      <aside className="sidebar-wrapper">
        <div className="sidebar sidebar-collapse" id="sidebar">
          <div className="sidebar__menu-group">
            <ul className="sidebar_nav">
              <li className="menu-title">
                <span>Main menu</span>
              </li>
              <li className="has-child open">
                <a href="#" className="active">
                  <span data-feather="home" className="nav-icon" />
                  <span className="menu-text">Dashboard</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
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
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="layout" className="nav-icon" />
                  <span className="menu-text">Layouts</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
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
              <li>
                <a href="changelog.html" className="">
                  <span data-feather="activity" className="nav-icon" />
                  <span className="menu-text">Changelog</span>
                  <span className="badge badge-primary menuItem">2.1.6</span>
                </a>
              </li>
              <li className="menu-title m-top-30">
                <span>Applications</span>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="mail" className="nav-icon" />
                  <span className="menu-text">Email</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
                  <li>
                    <a className="" href="inbox.html">
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a className="" href="read-email.html">
                      Read Email
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="chat.html" className="">
                  <span data-feather="message-square" className="nav-icon" />
                  <span className="menu-text">Chat</span>
                </a>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="shopping-cart" className="nav-icon" />
                  <span className="menu-text">eCommerce</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
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
                    <a href="add-product.html" className="">
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
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="aperture" className="nav-icon" />
                  <span className="menu-text">Social App</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
                  <li className="nav-item">
                    <a href="profile.html" className="">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a href="profile-setting.html" className="">
                      Profile Settings
                      <span className="badge badge-success menuItem">New</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="profile.html#timeline">
                      Timeline
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="profile.html#activity">
                      Activity
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="target" className="nav-icon" />
                  <span className="menu-text">Project</span>
                  <span className="toggle-icon" />
                </a>
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
                </ul>
              </li>
              <li>
                <a href="calendar.html" className="">
                  <span data-feather="calendar" className="nav-icon" />
                  <span className="menu-text">Calendar</span>
                </a>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="folder" className="nav-icon" />
                  <span className="menu-text">Users</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
                  <li>
                    <a href="users-membar.html" className="">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="users-card.html" className="">
                      Users Grid
                    </a>
                  </li>
                  <li>
                    <a href="users-list.html" className="">
                      Users List
                    </a>
                  </li>
                  <li>
                    <a href="users-card2.html" className="">
                      Users Grid style
                    </a>
                  </li>
                  <li>
                    <a href="users-group.html" className="">
                      Users Group
                    </a>
                  </li>
                  <li>
                    <a href="user-info.html" className="">
                      <span className="badge badge-success menuItem">New</span>Add
                      User
                    </a>
                  </li>
                  <li>
                    <a href="users-datatable.html" className="">
                      Users Table
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="user-check" className="nav-icon" />
                  <span className="menu-text">Contact</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
                  <li>
                    <a className="" href="contact-2.html">
                      Contact Grid
                    </a>
                  </li>
                  <li>
                    <a className="" href="contact-1.html">
                      Contact List
                    </a>
                  </li>
                  <li>
                    <a className="" href="contact-3.html">
                      Contact Create
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="note.html" className="">
                  <span data-feather="file-text" className="nav-icon" />
                  <span className="menu-text">Note</span>
                </a>
              </li>
              <li>
                <a href="to-do.html" className="">
                  <span data-feather="check-square" className="nav-icon" />
                  <span className="menu-text">To-Do</span>
                </a>
              </li>
              <li>
                <a href="kanban.html" className="">
                  <span data-feather="columns" className="nav-icon" />
                  <span className="menu-text">Kanban Board</span>
                  <span className="badge badge-success menuItem">New</span>
                </a>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="repeat" className="nav-icon" />
                  <span className="menu-text">Import &amp; Export</span>
                  <span className="toggle-icon" />
                  <span className="badge badge-success menuItem">New</span>
                </a>
                <ul>
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
                  <span className="badge badge-success menuItem">New</span>
                </a>
              </li>
              <li>
                <a href="bookmarks.html" className="">
                  <span data-feather="bookmark" className="nav-icon" />
                  <span className="menu-text">
                    Bookmarks
                    <span className="badge badge-success menuItem">New</span>
                  </span>
                </a>
              </li>
              <li className="menu-title m-top-30">
                <span>CRUD</span>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="database" className="nav-icon" />
                  <span className="menu-text">Firestore Crud</span>
                  <span className="toggle-icon" />
                  <span className="badge badge-success menuItem">New</span>
                </a>
                <ul>
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
              <li className="menu-title m-top-30">
                <span>Features</span>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="layers" className="nav-icon" />
                  <span className="menu-text">UI Elements</span>
                  <span className="toggle-icon" />
                </a>
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
                    <a className="" href="grid.html">
                      <span className="badge badge-success menuItem">New</span>
                      Grid
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
                    <a className="" href="time-picker.html">
                      Timepicker
                    </a>
                  </li>
                  <li>
                    <a className="" href="uploads.html">
                      Upload
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="bar-chart-2" className="nav-icon" />
                  <span className="menu-text">Charts</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
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
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="disc" className="nav-icon" />
                  <span className="menu-text">Froms</span>
                  <span className="toggle-icon" />
                  <span className="badge badge-success menuItem">New</span>
                </a>
                <ul>
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
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="cpu" className="nav-icon" />
                  <span className="menu-text">Table</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
                  <li>
                    <a href="basic-table.html" className="">
                      Basic Table
                    </a>
                  </li>
                  <li>
                    <a href="datatable.html" className="">
                      Data Table
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="server" className="nav-icon" />
                  <span className="menu-text">Widget</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
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
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="square" className="nav-icon" />
                  <span className="menu-text">Wizards</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
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
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="grid" className="nav-icon" />
                  <span className="menu-text">Icons</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
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
              <li>
                <a href="editors.html" className="">
                  <span data-feather="edit" className="nav-icon" />
                  <span className="menu-text">Editors</span>
                  <span className="badge badge-success menuItem">New</span>
                </a>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="map" className="nav-icon" />
                  <span className="menu-text">Maps</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
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
              <li className="menu-title m-top-30">
                <span>Pages</span>
              </li>
              <li>
                <a href="profile-setting.html" className="">
                  <span data-feather="settings" className="nav-icon" />
                  <span className="menu-text">Settings</span>
                </a>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="image" className="nav-icon" />
                  <span className="menu-text">Gallery</span>
                  <span className="toggle-icon" />
                </a>
                <ul>
                  <li>
                    <a href="gallery.html" className="">
                      Gallery 1
                    </a>
                  </li>
                  <li>
                    <a href="gallery2.html" className="">
                      Gallery 2
                      <span className="badge badge-success menuItem">New</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="pricing.html" className="">
                  <span data-feather="dollar-sign" className="nav-icon" />
                  <span className="menu-text">Pricing</span>
                </a>
              </li>
              <li>
                <a href="banner.html" className="">
                  <span data-feather="cast" className="nav-icon" />
                  <span className="menu-text">Banners</span>
                </a>
              </li>
              <li>
                <a href="testimonial.html" className="">
                  <span data-feather="book-open" className="nav-icon" />
                  <span className="menu-text">Testimonial</span>
                </a>
              </li>
              <li>
                <a href="faq.html" className="">
                  <span data-feather="help-circle" className="nav-icon" />
                  <span className="menu-text">FAQ's</span>
                </a>
              </li>
              <li>
                <a href="search.html" className="">
                  <span data-feather="search" className="nav-icon" />
                  <span className="menu-text">Search Results</span>
                </a>
              </li>
              <li>
                <a href="blank.html" className="">
                  <span data-feather="circle" className="nav-icon" />
                  <span className="menu-text">Blank Page</span>
                  <span className="badge badge-success menuItem">New</span>
                </a>
              </li>
              <li className="has-child">
                <a href="#" className="">
                  <span data-feather="book" className="nav-icon" />
                  <span className="menu-text">Knowledge Base</span>
                  <span className="toggle-icon" />
                  <span className="badge badge-success menuItem">New</span>
                </a>
                <ul>
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
              <li>
                <a href="support.html" className="">
                  <span data-feather="headphones" className="nav-icon" />
                  <span className="menu-text">Support Center</span>
                  <span className="badge badge-success menuItem">New</span>
                </a>
              </li>
              <li>
                <a href="dynamic-table.html" className="">
                  <span data-feather="database" className="nav-icon" />
                  <span className="menu-text">Dynamic Table</span>
                  <span className="badge badge-success menuItem">New</span>
                </a>
              </li>
              <li>
                <a href="maintenance.html" className="">
                  <span data-feather="airplay" className="nav-icon" />
                  <span className="menu-text">Maintenance</span>
                </a>
              </li>
              <li>
                <a href="404.html" className="">
                  <span data-feather="alert-circle" className="nav-icon" />
                  <span className="menu-text">404</span>
                </a>
              </li>
              <li>
                <a href="coming-soon.html" className="">
                  <span data-feather="clock" className="nav-icon" />
                  <span className="menu-text">Coming Soon</span>
                </a>
              </li>
              <li>
                <a href="login.html" className="">
                  <span data-feather="user" className="nav-icon" />
                  <span className="menu-text">Log In</span>
                </a>
              </li>
              <li>
                <a href="sign-up.html" className="">
                  <span data-feather="user-plus" className="nav-icon" />
                  <span className="menu-text">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;
  