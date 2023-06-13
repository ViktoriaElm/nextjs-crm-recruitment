export default function CV() {
    return (<>
        {/* главный див в базе кандидатов */}
        <div>
            <h2>База кандидатов</h2>
            {/* боковая в базе кандидатов */}
            {/* <div>
                <button>База</button>
                <button>Вакансии</button>
                <button>Отчеты</button>
                <button>Календарь</button>
                <button>Список дел</button>
                <button>Добавить</button>
            </div> */}
            {/* список кандидатов в главной базе */}
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><img src="#" alt="фото" /></td>
                            <td><b>Иванов Иван Иванович</b></td>
                            <td>Java разработчик</td>
                            <td>ivanov.ivan@gmail.com</td>
                        </tr>
                        <tr>
                            <td><img src="#" alt="фото" /></td>
                            <td><b>Иванов Иван Иванович</b></td>
                            <td>Java разработчик</td>
                            <td>ivanov.ivan@gmail.com</td>
                        </tr>
                        <tr>
                            <td><img src="#" alt="фото" /></td>
                            <td><b>Иванов Иван Иванович</b></td>
                            <td>Java разработчик</td>
                            <td>ivanov.ivan@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* блок резюме кандидата - нужно сделать общий список кандидатов, в тот момент, когда они не выделены */}
            <div>
                {/* фио, должность, контакты, статус, дата события */}
                <div>
                    {/* фото */}
                    <div>
                        <img src="#" alt="фото база" />
                    </div>
                    {/* фио, контакты */}
                    <div>
                        <h3>Иванов Иван Иванович</h3>
                        <h4>Java разработчик</h4>
                        <span><b>email:</b>ivanov.ivan@gmail.com</span>
                        <span><b>WhatsApp:</b><a href="https://wa.me/+79218743998">+79218743998</a></span>
                        <span><b>Telegram:</b></span><a href="https://t.me/Viktoria_Gorkina">Viktoria_Gorkina</a>
                    </div>
                    {/* статусы, дата события */}
                    <div>
                        {/* рекрутер */}
                        <input value="Виктория Горкина" />

                        {/* выбор статусса (воронка) */}
                        <select name="pets" id="pet-select">
                            <option value="Новый">Новый</option>
                            <option value="Письмо отправлено">🟡 Письмо отправлено</option>
                            <option value="Повторное письмо">🟡 Повторное письмо</option>
                            <option value="Отказался сам">⚪ Отказался сам</option>
                            <option value="Первичная встреча">🟡 Первичная встреча</option>
                            <option value="Отказ после первичного">⚪ Отказ после первичного</option>
                            <option value="Отправлен на оценку">🔵 Отправлен на оценку</option>
                            <option value="Тестовое задание">🔵 Тестовое задание</option>
                            <option value="Техническая встреча">🔵 Техническая встреча</option>
                            <option value="Встреча с командой">🔵 Встреча с командой</option>
                            <option value="Лайфкодинг">🔵 Лайфкодинг</option>
                            <option value="Принятие решения">🟠 Принятие решения</option>
                            <option value="Отказ после рассмотрения">⚪ Отказ после рассмотрения</option>
                            <option value="На проверку СБ">🟢 На проверку СБ</option>
                            <option value="Сбор документов для СБ">🟢 Сбор документов для СБ</option>
                            <option value="Проверка СБ">🟢 Проверка СБ</option>
                            <option value="Отклонен СБ">⚪ Отклонен СБ</option>
                            <option value="Ждет оффер">🟢 Ждет оффер</option>
                            <option value="Отправлен оффер">🟢 Отправлен оффер</option>
                            <option value="Оффер не принят">⚪ Оффер не принят</option>
                            <option value="Оффер принят">🟢 Оффер принят</option>
                            <option value="Отказался от выхода">⚪ Отказался от выхода</option>
                            <option value="Испытательный срок">🟠 Испытательный срок</option>
                            <option value="Испытательные не пройден">⚫ Испытательные не пройден</option>
                            <option value="Испытательный пройден">⛔ Испытательный пройден</option>
                            <option value="Резерв">🟣 Резерв</option>
                        </select>

                        <input type="date" name="trip-start" min="2018-01-01" max="2024-12-31"></input>
                    </div>

                    {/* инфо о добавлении */}
                    <div>
                        <table>
                            <thead>
                                <th>Добавлен в базу</th>
                                <th>Источник</th>
                                <th>Отправлен на оценку</th>
                            </thead>
                            <tbody>
                                <td>Дата</td>
                                <td>Ссылка</td>
                                {/* дата последнего изменения статуса */}
                                <td>Дата</td>
                            </tbody>
                        </table>
                    </div>

                    {/* резюме */}
                    <div>
                        <table>
                            <thead>
                                <th>Проживает</th>
                                <th>Гражданство</th>
                                <th>WhatsApp</th>
                                <th>Telegram</th>
                                <th>GitHub</th>
                                <th>Хабр</th>
                                <th>LinkedIn</th>
                                <th>VK</th>
                                <th>FB</th>
                                <th>Прочее</th>
                            </thead>
                            <tbody>
                                <td>Москва</td>
                                <td>Россия</td>
                                <td><a href="https://wa.me/+79218743998">+79218743998</a></td>
                                <td><a href="https://t.me/Viktoria_Gorkina">Viktoria_Gorkina</a></td>
                                <td><a href="https://github.com/?ysclid=levr2y0ti7239201170">https://github.com/?ysclid=levr2y0ti7239201170</a></td>
                                <td><a href="https://career.habr.com/viktoriia_gorkina">https://career.habr.com/viktoriia_gorkina</a></td>
                                <td><a href="#"></a></td>
                                <td><a href="#"></a></td>
                                <td><a href="#"></a></td>
                            </tbody>
                        </table>
                        <h2>Резюме:</h2>
                        <textarea name="cv" rows="55" cols="100">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper viverra nam libero justo laoreet sit. Sit amet porttitor eget dolor morbi non arcu risus quis. Commodo sed egestas egestas fringilla phasellus faucibus. Sed id semper risus in hendrerit gravida rutrum quisque. Urna neque viverra justo nec ultrices dui sapien. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. In massa tempor nec feugiat nisl pretium fusce. Lacus luctus accumsan tortor posuere ac. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Lacus sed viverra tellus in. Ornare arcu odio ut sem nulla pharetra diam sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Sit amet tellus cras adipiscing enim eu. Enim diam vulputate ut pharetra sit amet aliquam. Quam elementum pulvinar etiam non quam. Tempus imperdiet nulla malesuada pellentesque elit eget gravida.

                            Condimentum vitae sapien pellentesque habitant morbi tristique. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. At quis risus sed vulputate odio. Pharetra sit amet aliquam id diam maecenas. In massa tempor nec feugiat nisl pretium. Enim sed faucibus turpis in eu mi bibendum neque. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. A diam maecenas sed enim ut. Viverra aliquet eget sit amet tellus cras. Nunc id cursus metus aliquam. Nunc eget lorem dolor sed viverra.

                            Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Et egestas quis ipsum suspendisse ultrices gravida. Tincidunt augue interdum velit euismod in pellentesque. Malesuada fames ac turpis egestas sed tempus urna. Dignissim sodales ut eu sem. Mi proin sed libero enim sed faucibus turpis in eu. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Lectus magna fringilla urna porttitor rhoncus dolor purus. Et odio pellentesque diam volutpat commodo sed egestas egestas. Volutpat sed cras ornare arcu dui vivamus arcu felis. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.

                            In ante metus dictum at tempor commodo ullamcorper. Lacus viverra vitae congue eu. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Neque laoreet suspendisse interdum consectetur libero id faucibus. Habitasse platea dictumst vestibulum rhoncus est. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. In aliquam sem fringilla ut morbi. Laoreet sit amet cursus sit amet dictum sit amet justo. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper.

                            Cursus vitae congue mauris rhoncus. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Fermentum leo vel orci porta non pulvinar neque. At urna condimentum mattis pellentesque. Ac tortor dignissim convallis aenean et tortor at risus. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Et pharetra pharetra massa massa ultricies mi. Pellentesque elit eget gravida cum sociis. Vitae semper quis lectus nulla at volutpat diam ut. Felis imperdiet proin fermentum leo vel. Sit amet cursus sit amet dictum sit amet justo. Pellentesque eu tincidunt tortor aliquam nulla. Mauris a diam maecenas sed. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Ante metus dictum at tempor commodo ullamcorper a. Netus et malesuada fames ac. Morbi tristique senectus et netus et.
                        </textarea>
                    </div>

                    <div>
                        <button>Скачать резюме</button>
                    </div>

                </div>



            </div>
        </div>
    </>)
}