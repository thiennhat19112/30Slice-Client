function Home() {
    return (
        <main className="container">
            <div className="text-center mb-4">
            <img src="assets/img/bannner.png" className="d-block m-auto" width="450" height="200" alt="Логотип барбершопа"></img>
            <button className="button ">Đặt ngay</button>
            </div>

            <h1 className="visually-hidden">Барбершоп</h1>
            <section className="features" id="info-point">
                <h2 className="visually-hidden">Преимущества</h2>
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
            <div className="index-columns">
                <section className="news" id="news-point">
                    <h2>Новости</h2>
                    <ul className="news-list">
                        <li className="news-item">
                            <p>
                                Нам наконец завезли Ягермайстер! Теперь Вы можете пропустить
                                стаканчик во время стрижки
                            </p>
                            <time dateTime="2018-01-11">11 января</time>
                        </li>
                        <li className="news-item">
                            <p>
                                В нашей команде пополнение, Борис «Бритва» Стригунец, обладатель
                                множества титулов и наград пополнил наши стройные ряды
                            </p>
                            <time dateTime="2018-01-18">18 января</time>
                        </li>
                    </ul>
                    <a className="button" href="#">
                        Все новости
                    </a>
                </section>
                <section className="gallery">
                    <h2>Фотогалерея</h2>
                    <div className="gallery-container">
                        <figure className="gallery-content">
                            <a href="#">
                                <img src="assets/img/studio.jpg" width={286} height={164} alt="Интерьер" />
                            </a>
                        </figure>
                        <button
                            className="button gallery-button gallery-button-back"
                            disabled=""
                        >
                            Назад
                        </button>
                        <button className="button gallery-button gallery-button-next">
                            Вперед
                        </button>
                    </div>
                </section>
            </div>
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