import React from "react";
import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg'
import { ReactComponent as CaretIcon } from './icons/caret.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as CogIcon } from './icons/cog.svg'
import { ReactComponent as ChevronIcon } from './icons/chevron.svg'
import { ReactComponent as ArrowIcon } from './icons/arrow.svg'
import { ReactComponent as BoltIcon } from './icons/bolt.svg'

import { useState } from "react";

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />} >
        <DropDownMenu />
      </NavItem >


    </Navbar>
  );
}

function DropDownMenu() {
  function DropDownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}

        <span className="icon-right">{props.leftIcon}</span>
      </a>
    )
  }

  return(
    <div className="dropdown">
      <DropDownItem>My profile</DropDownItem>
      <DropDownItem>
        leftIcon={<CogIcon />}
        rightIcon={<ChevronIcon />}
      </DropDownItem>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  console.log(open)
  return(
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}



export default App;