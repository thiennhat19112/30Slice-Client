import { useLocation, NavLink } from 'react-router-dom';

function Breadcrumb() {
   const location = useLocation();

   let path = location.pathname.split('/').slice(1);

   let brc = path.map((item, index, row) => {
      let link = path.slice(0, index + 1).join('/');
      if (index + 1 === row.length) {
         return (
            <li className='breadcrumbs-current' key={index}> {item} </li>
         );
      } else {
         return (
            <li key={index}>
               <NavLink to={`/${link}`}>{item}</NavLink>
            </li>
         );
      }
   });

   return (
      <ul className="breadcrumbs">
         <li>
            <NavLink to="/"> Trang chủ </NavLink>
         </li>
         {brc}
      </ul>
   );
}
export default Breadcrumb;