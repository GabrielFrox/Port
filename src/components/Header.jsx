import React from "react";
import pug from '../images/pug.png'

function Header() {
  return (
    <section id="top">
      <img src={pug} alt="Shiba" id="logo"/>
      <div id="topics">
        {/* <h3>sobre</h3> */}
        {/* <h3>contato</h3> */}
        {/* <h3>links</h3> */}
      </div>
    </section>
  );
}

export default Header;
