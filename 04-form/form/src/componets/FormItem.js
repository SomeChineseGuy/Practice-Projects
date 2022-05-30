import { useState} from "react";
import './FormItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const FormItem = (props) => {
  const {name, type, elements, placeholder} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleToggle = (e) => {
    pickUser(e.target.innerText)
    e.target.focus();
  }

  const handleBlur = (e) => {
    if (e.nativeEvent.explicitOriginalTarget && e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) return;
    
    setTimeout(() => {
      if(isOpen) setIsOpen(false);  
    }, 100);    
  }

  const pickUser = (selection) => {
    setSelected(selection)
  }

  return(
    <div className="item-container">
      <h3>{name}</h3>
      {type === "dropdown" &&
        <div className={`dropdown-container ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <input 
            type="button" 
            value={selected ? selected : "Select"}
            onBlur={handleBlur} 
            className='selected' 
            style={isOpen ? {fontStyle: 'italic', opacity: '0.5'} : {opacity: .7} } 
          />            
          
          <ul >            
            {isOpen && elements.map(item => {
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

    {type !== "dropdown" &&
      <div> 
        <input type={type} placeholder={placeholder} className="normal-input"/>
      </div>
    }
    
    </div>
  )
}