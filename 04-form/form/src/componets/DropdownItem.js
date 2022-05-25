import { useState } from "react";
import './DropdownItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const DropDownItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className={`dropdown-container ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <li className='selected' style={isOpen ? {fontStyle: 'italic', opacity: '0.5'} : {} }>
        {props.selected ? props.selected : "Select"}
      </li>
      <ul>
        
        {isOpen && props.items.map(item => {
          return (
          <li key={item.id} onClick={(e) => props.pickUser(item.value)}>
            {item.value}
          </li>
          )
        })}
        <FontAwesomeIcon icon={faChevronDown}  className={`icon ${isOpen ? 'up' : ''}`} />
      </ul>
    </div>
  )
}