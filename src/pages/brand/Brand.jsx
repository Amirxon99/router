import  './brand.css'
import logo1 from '../../assets/images/trenajor.png'
import logo2 from '../../assets/images/funksionalniy.png'
import logo3 from '../../assets/images/ramidlya.png'
import logo4 from '../../assets/images/lateralniy.png'
import logo5 from '../../assets/images/begovayadorojka.png'
import logo6 from '../../assets/images/ellipticheskiy.png'

function Brand() {
  return (
    <div className='container brand'>
          <br /><h2 className='onashem'>О НАШЕМ БРЕНДЕ</h2><br /><br />
          <h1 className='truefitnes'>TRUE - СОВЕРШЕННОE </h1><br />
          <h1 className='truefitnes'>ФИТНЕС-ОБОРУДОВАНИЕ</h1>
          <br /><br />
          <div className='backimg'>
                <div className='sovershenstvo'>
                      <br /><p>Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями, которые мы используем для производстве наших машин. Но оно также создается и благодаря нашей преданности клиентам и их потребностям.</p>
                     <br /><br /> <p className='nashaopit'>Наша опытная команда предлагает комплексное обслуживание, начиная от планирования объекта до технического обслуживания и оснащения ваших залов новейшими технологиями. Являясь вашим надежным партнером, мы делаем все возможное, чтобы ваше предприятие продолжало эффективно работать годы и годы.</p>
                     <br /><br /> <p className='nashaopit'>Вы можете рассчитывать на нас в предоставлении одних из лучших услуг в отрасли. Мы ориентированы на оптимизацию срока службы вашего фитнес-оборудования. Мы всегда ищем способы расширить сферу взаимодействия с нашими клиентами, будь то предоставление учебных материалов для ваших сотрудников и инструкторов, или разработка технологических решений, отвечающих потребностям современных пользователей.</p>
                     <br /> <b>Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может помочь вашей компании добиться успеха.</b><br />
                </div>
          </div>
          <div>
            <br /><br /><h1 className='truefitnes'>Наши инновации</h1><br /><br />
            <div className='sixboxes'>
                  <img src={logo1} alt="" />
                  <img src={logo2} alt="" />
                  <img src={logo3} alt="" />
                  <img src={logo4} alt="" />
                  <img src={logo5} alt="" />
                  <img src={logo6} alt="" />
            </div>
          </div>
          <div className='backimg2'>
                  <div className='truefitnessopacity'>
                        <br /><h3 className='truefitnessbro'>TRUE FITNESS</h3><br /><br />
                        <h1 className='poluchite'>Получите </h1>
                        <h1 className='poluchite mdkok'>эксклюзивное </h1>
                        <h1 className='poluchite'>предложение на </h1>
                        <h1 className='poluchite mdkok' >тренажеры TRUE FITNESS</h1><br />
                        <h3 className='mibudemradi'>Мы будем рады проконсультировать Вас и помочь с подбором оборудования</h3><br /><br />
                        <div className='mdinputboxes'>
                                <input className='mdinput' type="text" placeholder='имя'/>
                                <input className='mdinput' type="text" placeholder='+998 (99)-999-99-99'/>
                                <input className='mdinput' type="text" placeholder='e-mail'/>
                                <button className='mdbtnotpravit'>отправить</button>
                        </div><br />
                        <h3 className='najimaya'>«Нажимая на кнопку, вы даете согласие на обработку персональных данных и </h3>
                        <h3 className='najimaya'>соглашаетесь c политикой конфиденциальности»</h3>
                  </div>
          </div>
    </div>
  )
}

export default Brand
