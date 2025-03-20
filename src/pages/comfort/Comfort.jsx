import typs from '../../assets/images/typs.png'
import './comfort.css'

function Comfort() {
  return (
    <div className='aaabout'>
      <div className="Aabout ">
        <p className='ppp'>НАШИ ПРЕИМУЩЕСТВА</p>
        <h1 className='h11'>Преимущества TRUE FITNESS</h1>
        <h3 className='h33'>Благодаря которым мы являемся мировым лидером в производстве фитнес- <br /> оборудования</h3>
      </div> <br /><br />
      <div className="container">
        <div className="Atyps">
          <div className="bola">
            <img src={typs} alt="" />
            <h2>Лучшие <br /> характеристики в <br /> классе</h2> <br />
            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
          </div>
          <div className="bola">
            <img src={typs} alt="" />
            <h2>Высокая <br /> надежность оборудования</h2> <br />
            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
          </div>
          <div className="bola">
            <img src={typs} alt="" />
            <h2>Низкая стоимость владения</h2> <br />
            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
          </div>
          <div className="bola">
            <img src={typs} alt="" />
            <h2>Качественный и оперативный сервис</h2> <br />
            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
          </div>
        </div> <br />
        <div className="Atyps">
          <div className="bola">
            <img src={typs} alt="" />
            <h2>Цены ниже, чем у аналогов</h2> <br />
            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
          </div>
          <div className="bola">
            <img src={typs} alt="" />
            <h2>Совершенная производительность</h2> <br />
            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
          </div>
          <div className="bola">
            <img src={typs} alt="" />
            <h2>Абсолютные лидеры по количеству инноваций</h2> <br />
            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
          </div>
          <div className="bola">
            <img src={typs} alt="" />
            <h2>Максимальное удобство и функциональность</h2> <br />
            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
          </div>
        </div>
      </div>
      <hr />
      <h1 className='Abrend'>Бренд TRUE Fitness входит в TOП 5 крупнейших производителей <br /> фитнес оборудования</h1>
      <hr /><br />
      <div className='backimg2'>
        <div className='truefitnessopacity'>
          <br /><h3 className='truefitnessbro'>TRUE FITNESS</h3><br /><br />
          <h1 className='poluchite'>Получите </h1>
          <h1 className='poluchite mdkok'>эксклюзивное </h1>
          <h1 className='poluchite'>предложение на </h1>
          <h1 className='poluchite mdkok' >тренажеры TRUE FITNESS</h1><br />
          <h3 className='mibudemradi'>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</h3><br /><br />
          <div className='mdinputboxes'>
            <input className='mdinput' type="text" placeholder='имя' />
            <input className='mdinput' type="text" placeholder='+998 (99)-999-99-99' />
            <input className='mdinput' type="text" placeholder='e-mail' />
            <button className='mdbtnotpravit'>отправить</button>
          </div><br />
          <h3 className='najimaya'>«Нажимая на кнопку, вы даете согласие на обработку персональных данных и </h3>
          <h3 className='najimaya'>соглашаетесь c политикой конфиденциальности»</h3>
        </div>
      </div>
    </div>

  )
}

export default Comfort