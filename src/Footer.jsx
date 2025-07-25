import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      
      <div className="container ">

        <div className="footer-logo">
          <img src="./img/logo2.png" alt="" />
        </div>
        <div className='footer-content'>
          <div>
            <div className='footer-f'>
              <img src="./img/Group5.png" alt="" />
              <p>г. Астрахань: ул. Свердлова, 106;ул. Победы 55А, пав. 10.</p>
            </div>
              <div className='footer-ff'>
                <img src="./img/Component3.png" alt="" />
                <p>Ежедневно с 9:00 до 18:00</p>
              </div>
          </div>
          
            <div>
            <div className='footer-fff'>
              <i class="fa-brands fa-whatsapp"></i>
              <p>Мы в Whatsapp</p>
            </div>
            <div className='footer-fff'>
            <i class="fa-brands fa-telegram"></i>
              <p>Мы в Telegram</p>
            </div>
            <div className='footer-fff'>
            <i class="fa-regular fa-envelope"></i>
              <p>parfumpomotivam@gmail.com</p>
            </div>
            </div>
              <div className='footer-ffff'>
          <img src="./img/Component4.png" alt="" />
          <p>ИП РАГИМОВА А.М.К. ИНН 510704693888</p>
        </div>
        </div>
    <div className='pp'>
        <p className='p'>© Parfumpomotivam 2023</p>
        <p className='p1'>Политика конфиденциальности</p>
    </div>
      </div>
    </div>
  )
}

export default Footer
