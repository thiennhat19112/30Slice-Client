function Home() {
    return (
        <main className="container">
            <div className="text-center mb-4">
                <img src="assets/img/bannner.png" className="d-block m-auto" width="450" height="200" alt="Логотип барбершопа"></img>
                <button className="button ">Đặt ngay</button>
            </div>
            <section className="features" id="info-point">
                <ul className="features-list">
                    <li className="feature-item">
                        <h3>Tiếng việt</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </li>
                    <li className="feature-item">
                        <h3>Tiếng việt 1</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </li>
                    <li className="feature-item">
                        <h3>Tiếng việt 2</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </li>
                </ul>
            </section>

            <section className="newcatalogs" id="news-point">
                <h2>Sản phẩm</h2>
                <div className="items text-center">
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
                                       Sản phẩm
                                    </span>
                                    <span className="catalog-item-title">
                                         from vietnam
                                    </span>
                                </h3>
                            </a>
                            <div className="price">
                                <p className="price-text">150 ₴</p>
                                <a className="price-btn" href="#">
                                    Mua
                                </a>
                            </div>
                        </div>
                    </figure>
                    <figure className="item-card">
                        <a href="#">
                            <div className="img-wrapper">
                                <img src="assets/img/product-3.jpg" alt="Увлажняющий кондиционер" />
                            </div>
                        </a>
                        <div className="item-card-description">
                            <a href="#">
                                <h3>
                                    <span className="catalog-category">
                                       Sản phẩm
                                    </span>
                                    <span className="catalog-item-title">
                                         from vietnam
                                    </span>
                                </h3>
                            </a>
                            <div className="price">
                                <p className="price-text">150 ₴</p>
                                <a className="price-btn" href="#">
                                    Mua
                                </a>
                            </div>
                        </div>
                    </figure>
                    <figure className="item-card">
                        <a href="#">
                            <div className="img-wrapper">
                                <img src="assets/img/product-4.jpg" alt="Увлажняющий кондиционер" />
                            </div>
                        </a>
                        <div className="item-card-description">
                            <a href="#">
                                <h3>
                                    <span className="catalog-category">
                                       Sản phẩm
                                    </span>
                                    <span className="catalog-item-title">
                                         from vietnam
                                    </span>
                                </h3>
                            </a>
                            <div className="price">
                                <p className="price-text">150 ₴</p>
                                <a className="price-btn" href="#">
                                    Mua
                                </a>
                            </div>
                        </div>
                    </figure>

                </div>
            </section>


            <div className="index-columns">
                <section className="contacts" id="contacts-point">
                    <h2>Контактная информация</h2>
                    <p>
                        Барбершоп контакты
                        <br />
                        Адрес: г. Киев, Б. Шевченка, Д. 11/18
                        <br />
                        Телефон: +38 (093) 088-24-55
                    </p>
                    <p>
                        Время работы:
                        <br />
                        пн-пт: с 10:00 до 22:00
                        <br />
                        сб-вс: с 10:00 до 19:00
                    </p>
                    <a className="button contacts-button contacts-button-map" href="map.html">
                        Как проехать
                    </a>
                    <a className="button contacts-button" href="#">
                        Обратная связь
                    </a>
                </section>
                <section className="appointment">
                    <h2>Записаться</h2>
                    <p className="appointment-info">
                        Укажите желаемую дату и время и мы свяжемся с Вами для подтверждения
                        брони
                    </p>
                    <form className="appointment-form" action="#" method="post">
                        <p className="appointment-item">
                            <label htmlFor="appointment-date">Дата</label>
                            <input
                                id="appointment-date"
                                type="text"
                                name="date"
                                defaultValue=""
                                placeholder="08.10.2017"
                            />
                        </p>
                        <p className="appointment-item">
                            <label htmlFor="appointment-time">Время</label>
                            <input
                                id="appointment-time"
                                type="text"
                                name="time"
                                defaultValue=""
                                placeholder="10:00"
                            />
                        </p>
                        <p className="appointment-item">
                            <label htmlFor="appointment-name">Ваше имя</label>
                            <input
                                id="appointment-name"
                                type="text"
                                name="name"
                                defaultValue=""
                                placeholder="Борода"
                            />
                        </p>
                        <p className="appointment-item">
                            <label htmlFor="appointment-phone">Телефон</label>
                            <input
                                id="appointment-phone"
                                type="tel"
                                name="phone"
                                placeholder="+ 38 093 456-78-90"
                            />
                        </p>
                        <button className="button" type="submit">
                            Отправить
                        </button>
                    </form>
                </section>
            </div>
        </main>

    )
}
export default Home;