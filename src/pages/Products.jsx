import { useEffect, useState } from 'react';

import Breadcrumb from '../components/Breakcumb';
import Product from '../components/Product';

function Products(props) {
   const [listCate, setCate] = useState([]);
   useEffect(() => {
      let url = 'https://30slice.online/api/category/getAllCategories';
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setCate(data);
         });
   }, []);


   return (
      <main className="container">
         <h1 className="page-title">Barbershop - магазин</h1>
         <Breadcrumb />
         <div className="catalog-columns">
            <section className="filters">
               <h2 className="visually-hidden">Фильтр товаров</h2>
               <form className="filter">
                  <fieldset>
                     <legend>Loại sản phẩm:</legend>
                     <ul>
                        {listCate.map((cate, index) => (
                           <li key={index} className="filter-option">
                              <input
                                 className="visually-hidden filter-input filter-input-checkbox"
                                 type="checkbox"
                                 name="baxter-of-california"
                                 id={cate._id}
                                 defaultChecked=""
                              />
                              <label htmlFor={cate._id}>
                                 {cate.Name}
                              </label>
                           </li>
                        ))}
                     </ul>
                  </fieldset>
                  <fieldset>
                     <legend className="categories-title">Группы товаров:</legend>
                     <ul>
                        <li className="filter-option">
                           <input
                              className="visually-hidden filter-input filter-input-radio"
                              type="radio"
                              name="product-group"
                              defaultValue="shaving"
                              id="filter-shave"
                           />
                           <label htmlFor="filter-shave">Бритвенные принадлежности</label>
                        </li>
                        <li className="filter-option">
                           <input
                              className="visually-hidden filter-input filter-input-radio"
                              type="radio"
                              name="product-group"
                              defaultValue="hair-care"
                              id="filter-care"
                              defaultChecked=""
                           />
                           <label htmlFor="filter-care">Средства для ухода</label>
                        </li>
                        <li className="filter-option">
                           <input
                              className="visually-hidden filter-input filter-input-radio"
                              type="radio"
                              name="product-group"
                              defaultValue="accessories"
                              id="filter-accessories"
                              disabled=""
                           />
                           <label htmlFor="filter-accessories">Аксессуары</label>
                        </li>
                     </ul>
                  </fieldset>
                  <button className="filter-button button" type="submit">
                     Показать
                  </button>
               </form>
            </section>
            <section className="catalog">
               <div className="items">
                  <Product ></Product>
               </div>
               <ul className="pagination-list">
                  <li className="pagination-item">
                     <a href="#">1</a>
                  </li>
                  <li className="pagination-item pagination-item-current">
                     <a>2</a>
                  </li>
                  <li className="pagination-item">
                     <a href="#">3</a>
                  </li>
                  <li className="pagination-item">
                     <a href="#">4</a>
                  </li>
               </ul>
            </section>
         </div>
      </main>
   )
}
export default Products