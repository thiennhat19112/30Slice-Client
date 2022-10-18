import { NavLink } from 'react-router-dom';

function Products(props) {
   return (
      <main className="container">
         <h1 className="page-title">Barbershop - магазин</h1>
         <ul className="breadcrumbs">
            <li>
               <a href="index.html">Главная</a>
            </li>
            <li>
               <a href="catalog.html">Магазин</a>
            </li>
            <li className="breadcrumbs-current">Средства для ухода</li>
         </ul>
         <div className="catalog-columns">
            <section className="filters">
               <h2 className="visually-hidden">Фильтр товаров</h2>
               <form
                  className="filter"
                  method="get"
                  action="htttps://echo.htmlacademy.ru"
               >
                  <fieldset>
                     <legend>Производители:</legend>
                     <ul>
                        <li className="filter-option">
                           <input
                              className="visually-hidden filter-input filter-input-checkbox"
                              type="checkbox"
                              name="baxter-of-california"
                              id="filter-baxter-of-california"
                              defaultChecked=""
                           />
                           <label htmlFor="filter-baxter-of-california">
                              Baxter of California
                           </label>
                        </li>
                        <li className="filter-option">
                           <input
                              className="visually-hidden filter-input filter-input-checkbox"
                              type="checkbox"
                              name="mr-natty"
                              id="filter-mr-natty"
                           />
                           <label htmlFor="filter-mr-natty">Mr Natty</label>
                        </li>
                        <li className="filter-option">
                           <input
                              className="visually-hidden filter-input filter-input-checkbox"
                              type="checkbox"
                              name="suavecito"
                              id="filter-suavecito"
                              defaultChecked=""
                           />
                           <label htmlFor="filter-suavecito">Suavecito</label>
                        </li>
                        <li className="filter-option">
                           <input
                              className="visually-hidden filter-input filter-input-checkbox"
                              type="checkbox"
                              name="malin-goetz"
                              id="filter-malin-goetz"
                           />
                           <label htmlFor="filter-malin-goetz">Malin+Goetz</label>
                        </li>
                        <li className="filter-option">
                           <input
                              className="visually-hidden filter-input filter-input-checkbox"
                              type="checkbox"
                              name="murrays"
                              id="filter-murrays"
                           />
                           <label htmlFor="filter-murrays">Murray's</label>
                        </li>
                        <li className="filter-option">
                           <input
                              className="visually-hidden filter-input filter-input-checkbox"
                              type="checkbox"
                              name="american-crew"
                              id="filter-american-crew"
                              defaultChecked=""
                           />
                           <label htmlFor="filter-american-crew">American Crew</label>
                        </li>
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
                  <figure className="item-card">
                     <NavLink to="/products/id">
                        <div className="img-wrapper">
                           <img
                              src="assets/img/product-1.jpg"
                              height={165}
                              width={220}
                              alt="Набор для путешествий"
                           />
                        </div>
                     </NavLink>
                     <div className="item-card-description">
                        <a href="item.html">
                           <h3>
                              <span className="catalog-category">Набор для путешествий</span>
                              <span className="catalog-item-title">
                                 «Baxter of California»
                              </span>
                           </h3>
                        </a>
                        <div className="price">
                           <p className="price-text">900 ₴</p>
                           <a className="price-btn" href="#">
                              купить
                           </a>
                        </div>
                     </div>
                  </figure>
                  <figure className="item-card">
                     <a href="#">
                        <div className="img-wrapper">
                           <img src="assets/img/product-2.jpg" alt="Увлажняющий кондиционер" />
                        </div>
                     </a>
                     <div className="item-card-description">
                        <a href="#">
                           <h3>
                              <span className="catalog-category">
                                 Увлажняющий кондиционер
                              </span>
                              <span className="catalog-item-title">
                                 «Baxter of California»
                              </span>
                           </h3>
                        </a>
                        <div className="price">
                           <p className="price-text">150 ₴</p>
                           <a className="price-btn" href="#">
                              купить
                           </a>
                        </div>
                     </div>
                  </figure>
                  <figure className="item-card">
                     <a href="#">
                        <div className="img-wrapper">
                           <img src="assets/img/product-3.jpg" alt="Гель для волос" />
                        </div>
                     </a>
                     <div className="item-card-description">
                        <a href="#">
                           <h3>
                              <span className="catalog-category">Гель для укладки волос</span>
                              <span className="catalog-item-title">«Suavecito»</span>
                           </h3>
                        </a>
                        <div className="price">
                           <p className="price-text">290 ₴</p>
                           <a className="price-btn" href="#">
                              купить
                           </a>
                        </div>
                     </div>
                  </figure>
                  <figure className="item-card">
                     <a href="#">
                        <div className="img-wrapper">
                           <img src="assets/img/product-4.jpg" alt="Глина для укладки волос" />
                        </div>
                     </a>
                     <div className="item-card-description">
                        <a href="#">
                           <h3>
                              <span className="catalog-category">
                                 Глина для укладки волос
                              </span>
                              <span className="catalog-item-title">«American crew»</span>
                           </h3>
                        </a>
                        <div className="price">
                           <p className="price-text">300 ₴</p>
                           <a className="price-btn" href="#">
                              купить
                           </a>
                        </div>
                     </div>
                  </figure>
                  <figure className="item-card">
                     <a href="#">
                        <div className="img-wrapper">
                           <img src="assets/img/product-5.jpg" alt="Гель для волос" />
                        </div>
                     </a>
                     <div className="item-card-description">
                        <a href="#">
                           <h3>
                              <span className="catalog-category">Гель для волос</span>
                              <span className="catalog-item-title">«American crew»</span>
                           </h3>
                        </a>
                        <div className="price">
                           <p className="price-text">200 ₴</p>
                           <a className="price-btn" href="#">
                              купить
                           </a>
                        </div>
                     </div>
                  </figure>
                  <figure className="item-card">
                     <a href="#">
                        <div className="img-wrapper">
                           <img src="assets/img/product-6.jpg" alt="Набор для бритья" />
                        </div>
                     </a>
                     <div className="item-card-description">
                        <a href="#">
                           <h3>
                              <span className="catalog-category">Набор для бритья</span>
                              <span className="catalog-item-title">
                                 «Baxter of California»
                              </span>
                           </h3>
                        </a>
                        <div className="price">
                           <p className="price-text">390 ₴</p>
                           <a className="price-btn" href="#">
                              купить
                           </a>
                        </div>
                     </div>
                  </figure>
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