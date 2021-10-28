import React from 'react'
import Vector from '../assets/Group 106.svg'




export const Footer = () => {
  return <>
      <div className="wrapper">
      <footer className="footer">
        <div className="footer__main">
          <img className="footer__logo" src={Vector} alt=""/>
          <div className="footer__title">
            Станьте создателем
          </div>
          </div>
          <div className="contacts">
            <div className="contacts__item">
              <ul className="ul">Контакты
                 <li><a href=""> О нас</a></li>
                 <li> <a href="">Email</a></li>
                 <li> <a href="">Блог</a> </li>
                 <li>  <a href="">FAQ</a></li>
              </ul>
            </div>
            <div className="contacts__item">
              <ul className="ul">Контакты
                 <li><a href=""> Политика конфиденциальности</a></li>
                 <li> <a href="">Условия использования</a></li>
                 <li> <a href="">Настройка файлов Cookie</a> </li>
              </ul>
            </div>
            <div className="contacts__item">
              <ul className="ul">Контакты
              <li><a href=""> Политика конфиденциальности</a></li>
                 <li> <a href="">Условия использования</a></li>
                 <li> <a href="">Настройка файлов Cookie</a> </li>
              </ul>
            </div>
           
          </div>
         
          </footer>
          <div className="private">
           <p> © 2021, ИП бла бал бла бла бла бла бла, ОГРН 308614728400011 </p> 
            </div>
        </div>
  </>
}