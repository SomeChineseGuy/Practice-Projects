import { useState, useRef } from "react";
import './DropdownItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const DropDownItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (e) => {
    props.pickUser(e.target.innerText)
    e.target.focus();
    // console.log(e)
  }

  const handleBlur = (e) => {
    if (e.nativeEvent.explicitOriginalTarget && e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) return;
    
    setTimeout(() => {
      if(isOpen) setIsOpen(false);  
    }, 100);    
  }

  return(
    <div className="item-container">
      <h3>{props.name}</h3>
      {props.type === "dropdown" &&
        <div className={`dropdown-container ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <input 
            type="button" 
            value={props.selected ? props.selected : "Select"}
            onBlur={handleBlur} 
            className='selected' 
            style={isOpen ? {fontStyle: 'italic', opacity: '0.5'} : {opacity: .7} } 
          />            
          
          <ul >            
            {isOpen && props.elements.map(item => {
              return (
              <li key={item.id} onClick={handleToggle} >
                {item.value}
              </li>
              )
            })}
            <FontAwesomeIcon icon={faChevronDown}  className={`icon ${isOpen ? 'up' : ''}`} />
          </ul>
        </div>
      }

      {props.type === "number" &&
        <div> 
          <input type="number" placeholder="Number" className="number"/>
        </div>
      }

    </div>
  )
}