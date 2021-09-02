import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  
  const anchors = links.map((link) => (
    <a key={link} href={ `#${links}`}>
      {link}
    </a>
  ));

  return <nav> {anchors} </nav>;
          
}

export default NavBar;
