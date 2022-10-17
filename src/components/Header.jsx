
import { NavLink, Link } from 'react-router-dom'
function Header() {
    return (
        <header className="main-header">
            <nav className="navbar navbar-expand-lg container">
                <NavLink to="/" className="main-header-logo">
                    <img src="assets/img/logo.svg" width="111" height="24" alt='hình' />
                </NavLink>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavLink to="/" className='nav-item'>
                        <span className="nav-link"> Trang chủ </span>
                    </NavLink>
                    <NavLink to="/booking" className='nav-item' >
                        <span className="nav-link"> Đặt Lịch </span>
                    </NavLink>

                    {/* <li><a href="index.html#news-point">Sản Phẩm</a></li> */}
                    {/* <li className="site-navigation-current"><a>Tin Tức</a></li> */}
                </ul>
                <ul className="user-navigation">
                    <li>
                        {/* <a className="login-link" href="login.html">Вход</a> */}
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Header

