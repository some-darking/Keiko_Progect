import React, { useMemo } from "react";
import "./header.scss";
import {ToggleDark} from "./ToggleDark";

const Header = () => {

  const headtwo =  useMemo(() => {
    
    const arrowBlue = () => {
      const iconMenu = document.querySelector('.header_menu_icon');
      if(iconMenu){
        const menuBody = document.querySelector('.header_menu');
          document.body.classList.toggle('_lock')
          iconMenu.classList.toggle('_active')
          menuBody?.classList.toggle('_active')
        return undefined
      }
    }

    const onMenuClick = (event:any) => {
      const menuLink = event.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const block = document.querySelector(menuLink.dataset.goto);
        let prefix = 0;
        if(window.innerWidth <= 800){
          prefix=document.querySelector('.header_items')?.scrollHeight??0;
          arrowBlue();
        }
        const value = block.getBoundingClientRect().top + scrollY-prefix;
        window.scrollTo({
          top:value,
          behavior: 'smooth'
        })
        event.preventDefault();
      }
    }

    return(
      <div className="header_items">
        <div className="header_logo">
          <object className="header_logo_svg" type="image/svg+xml" data="../../../img/keiko-logo.svg" width="50" height="55px">
          </object>
        </div>

          <span className="rect"></span>
        <div className="header_menu menu">
          <div className="header_menu-body">
            <ul className="header_menu-list">
              <li><a data-goto="" href="#" className="header_menu-link">Home</a></li>
              <li><a data-goto=".features" href="#" className="header_menu-link" onClick={onMenuClick}>Features</a></li>
              <li><a data-goto=".testimonials" href="#" className="header_menu-link" onClick={onMenuClick}>Testimonial</a></li>
              <li><a data-goto="" href="#" className="header_menu-link">Team</a></li>
              <li><a data-goto="" href="#" className="header_menu-link menu-sub">More </a>
                <a className="arrow menu-sub"></a>
                <ul className="header_menu_sub-list menu-sub">
                  <li><a data-goto=".price-list" href="" className="header_menu_sub-link" onClick={onMenuClick}>Price</a></li>
                  <li><a data-goto="" href="" className="header_menu_sub-link">Обновим?</a></li>
                </ul>
              </li>
              {/* <li><a data-goto="" href="#" className="header_menu-link">Team</a></li> */}
            </ul>
          </div>
        </div>
        <div className="header_function">
          <ToggleDark/>

          <div className="button_header button">
            <button type="button" className="button_contact">Contact</button>
          </div> 

          <button
            className="header_menu_icon burger"
            onClick={arrowBlue}>
            <span></span>
          </button>
        </div>
      </div>
    )
  },[])

  return (
    <header id="header" className="header">
      {headtwo}
    </header>
  );
}

export default Header;