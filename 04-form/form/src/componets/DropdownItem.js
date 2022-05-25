import { useState } from "react";

export const DropDownItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(props)

  return(
    <ul onClick={() => setIsOpen(!isOpen)}>
      <li style={isOpen ? {fontStyle: 'italic', opacity: '0.5'} : {} }>{props.selected ? props.selected : "Select"}</li>
      {isOpen && props.items.map(item => {
        return (
        <li className='dropdown-item' key={item.id} onClick={(e) => props.pickUser(item.value)}>
          {item.value}
        </li>
        )
      })}
    </ul>
  )
}