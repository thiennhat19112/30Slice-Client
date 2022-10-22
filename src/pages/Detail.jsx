import Breadcrumb from "../components/Breakcumb"

function Detail(props) {
   return (
      <main className="container">
         <h1 className="page-title">Набор для путешествий «Baxter of California»</h1>
         <Breadcrumb />
         <div className="catalog-columns">
            <section className="product-photos">
               <h2 className="visually-hidden">Изображения товара</h2>
               <p className="product-photo-full">
                  <img
                     src="/assets/img/product-big.jpg"
                     width={460}
                     height={498}
                     alt="Фото всего набора"
                  />
               </p>
               <ul className="product-photo-preview">
                  <li>
                     <img
                        src="/assets/img/product-small-1.jpg"
                        width={140}
                        height={149}
                        alt="Фото в анфас"
                     />
                  </li>
                  <li>
                     <img
                        src="/assets/img/product-small-2.jpg"
                        width={140}
                        height={149}
                        alt="Фото в профиль"
                     />
                  </li>
                  <li>
                     <img
                        src="/assets/img/product-small-3.jpg"
                        width={140}
                        height={149}
                        alt="Фото отдельной части"
                     />
                  </li>
               </ul>
            </section>
            <section className="product-info">
               <h2 className="visually-hidden">Описание товара</h2>
               <p className="product-availability">Есть в наличии</p>
               <p className="product-article">Артикул: dexter-ae</p>
               <p className="product-text">
                  Travel Kit - необходимый аксессуар во время любого путешествия. В
                  аккуратной кожаной сумке находится все, что нужно для бритья и ухода за
                  кожей во время рабочей поездки или отдыха: средство для умывания,
                  увлажняющий крем, крем для бритья, крем после бритья, шампунь. Набор
                  также может стать отличным подарком.
               </p>
               <p className="product-price">
                  <b>900 ₴</b>
                  <a className="button" href="#">
                     Купить
                  </a>
               </p>
               <h3>В набор входят:</h3>
               <ul>
                  <li>Средство для умывания (50 мл)</li>
                  <li>Увлажняющий крем (50 мл)</li>
                  <li>Крем для бритья (50 мл)</li>
                  <li>Крем после бритья, шампунь (50 мл)</li>
                  <li>Удобная кожаная косметичка</li>
               </ul>
            </section>
         </div>
      </main>

   )
}
export default Detail