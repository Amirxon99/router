import './home.css';
import serviseImg from "../../assets/images/servise-img.png";
import InfoImg from "../../assets/images/InfoImg.png"

function Home() {
  return (
    <div>
      <div className="fitnez-video">
        <h2>TRUE FITNESS - ПРЕМИУМ <br /> ТРЕНАЖЕРЫ ИЗ США</h2>

      </div>
      <div className="true ">
        <h2>TRUE - ведущий мировой производитель премиального фитнес оборудования</h2>
      </div>
      <div className="home-box">
        <div className="big-card">
          <div className="info-img">
            <h3>Лучшие характеристики</h3>
            Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей
          </div>
          <div className="blue-card">
            <h3>ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ</h3>
            <p>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на кардиотренажеры.</p>
          </div>
        </div>
        <div className="big-card">
          <div className="blue-card">
            <h3>ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ</h3>
            <p>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на кардиотренажеры.</p>
          </div>
          <div className="info-img">
            <h3>Лучшие характеристики</h3>
            Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей
          </div>
        </div>
      </div>
      <div className="service">
        <div className="services">
          <h4>Мы предлагаем
            полный комплекс услуг</h4>
            <div className="service-box">
            <div className="service-info">
              <img src={InfoImg} alt="fsv" />
            <h5>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h5>
            <p>Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.</p>
            </div>
            <div className="service-info">
            <img src={InfoImg} alt="fsv" />
            <h5>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h5>
            <p>Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.</p>
            </div>
            <div className="service-info">
            <img src={InfoImg} alt="fsv" />
            <h5>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h5>
            <p>Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.</p>
            </div>
            <div className="service-info">
            <img src={InfoImg} alt="fsv" />
            <h5>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h5>
            <p>Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.</p>
            </div>
            <div className="service-info">
            <img src={InfoImg} alt="fsv" />
            <h5>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h5>
            <p>Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.</p>
            </div>
            <div className="service-info">
            <img src={InfoImg} alt="fsv" />
            <h5>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h5>
            <p>Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.</p>
            </div>
              
            </div>
        </div>
        <img src={serviseImg} alt="hsdb" />
      </div>
      <div className="registration-box">
       <div className="registration">
        <h5>Получите эксклюзивное предложение на тренажеры TRUE FITNESS</h5>
        <p>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>
        <input type="text" placeholder='имя'/>
        <input type="text" placeholder='EMail'/>
        <input type="number" placeholder='Номер'/>
        <button>ОТПРАВИТЬ</button>
        <p>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
       </div>
      </div>
    </div>
  )
}

export default Home