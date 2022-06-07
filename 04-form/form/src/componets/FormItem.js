import { useState} from "react";
import './FormItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const FormItem = (props) => {
  const {name, type, elements, placeholder, require, passedCheck, setItems, formIdx, itemIdx, innerIdx} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleToggle = (e) => {
    handleDropdown(e.target.innerText)
    e.target.focus();
  }

  console.log(innerIdx)

  const handleBlur = (e) => {
    if (e.nativeEvent.explicitOriginalTarget && e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) return;
    
    setTimeout(() => {
      if(isOpen) setIsOpen(false);  
    }, 100);    
  }

  const handleDropdown = (selection) => {
    setSelected(selection)
    setItems((prevState) => {
      prevState[formIdx].elements[0].list[itemIdx].value = selection;
      return [...prevState]
    })
  }

  const handleEntry = (event) => {
    setSelected(event.target.value)
    setItems((prevState) => {
      prevState[formIdx].elements[innerIdx].list[itemIdx].value = event.target.value;
      return [...prevState]
    })
  }


  return(
    <div className="item-container">
      <h3>{name}</h3>
      {type === "dropdown" &&
        <div className={`dropdown-container ${require && !passedCheck ? 'red' : ''} ${isOpen ? 'open' : ''} `} onClick={() => setIsOpen(!isOpen)}>
          <input 
            type="button" 
            value={selected ? selected : "Select"}
            onBlur={handleBlur} 
            className={`selected`}
            style={isOpen ? {fontStyle: 'italic', opacity: '0.5'} : {opacity: .7}} 
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
        <input 
          type={type} 
          placeholder={placeholder} 
          onChange={(e) => handleEntry(e)} 
          className={`normal-input ${require && !passedCheck ? 'red' : ''}`}
        />
      </div>
    }
    
    </div>
  )
}