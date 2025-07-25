import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="div">
          <div className="navbar-logo">
            <img src="./img/logo.png" alt="" />
            <h4>Ваш город: Москва</h4>
          </div>
          <ul className="navbar-nav">
            <li>
              <a href="#!" className="navbar-link">
                Бонусы
              </a>
            </li>
            <li>
              <a href="#!" className="navbar-link">
                Документация
              </a>
            </li>
            <li>
              <a href="#!" className="navbar-link">
                О нас
              </a>
            </li>
            <li>
              <a href="#!" className="navbar-link">
                7(937) 136 - 77 - 66
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="navvbar">
          <div className="nav-logo">
            <img src="./img/logo2.png" alt="" />
          </div>
          <div className="nav-search">
            <div className="div2">
              <i class="fa-solid fa-bars"></i>
              <h3>Каталог</h3>
            </div>
          </div>
            <input className="input" placeholder="Найти парфюм.." type="text" />
            <div className="search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
