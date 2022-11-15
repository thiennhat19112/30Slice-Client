import { useLocation, NavLink } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();

  let path = location.pathname.split("/").slice(1);

  let brc = path.map((item, index, row) => {
    let link = path.slice(0, index + 1).join("/");
    if (index + 1 === row.length) {
      return (
        <li className="atbd-breadcrumb__item" key={index}>
          {" "}
          {item}{" "}
        </li>
      );
    } else {
      return (
        <li className="atbd-breadcrumb__item" key={index}>
          <NavLink to={`/${link}`}>{item}</NavLink>
          <span className="breadcrumb__seperator">
            <span className="la la-angle-right" />
          </span>
        </li>
      );
    }
  });

  return (
    <div className="card card-default card-md mb-4">
      <div className="card-body">
        <ul className="atbd-breadcrumb nav">
          <li className="atbd-breadcrumb__item">
            <NavLink to="/"> Trang chủ </NavLink>
            <span className="breadcrumb__seperator">
              <span className="la la-angle-right" />
            </span>
          </li>
        {brc}
        </ul>
      </div>
    </div>
  );
}
export default Breadcrumb;
