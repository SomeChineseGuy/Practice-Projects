import { useState } from "react";
import '../variable.css';
import './DropdownContainer.css'


export const DropdownContainer = (props) => {
  const [open, setOpen] = useState(false);

  const DropdownItem = (props) => {
    const [selected, setSelected] = useState("selected");
    const [open, setOpen] = useState(false);
    console.log(props);
    return(
      <li>
        {props.driver}
      </li>
    );
  }

  const showData = (data) => {
    return data.map((item) => {
      if(item.type !== 'number') {
        return (
          <div key={item.id}>
            <h5>{item.name}</h5>
            <ul>
              {/* {                 id={item.id}
                 options={item.options}
                 placeholder={item.placeholder}
                 require={item.require}
                 type={item.type}
                 value={item.value}
                 width={item.width}} */}
                <li
                onClick={()=> setOpen(!open)}
                >test</li>
              {open && item.options.map((inner) => {
                return <DropdownItem
                  driver={inner.value}
                  key={inner.id}
                  
                />
              })}
             
            </ul>
          </div>        
        );
        }
        return (
          <div key={item.id}>
            <h5>{item.name}</h5>
            <input type="number" placeholder="Number"/>
          </div>  
        );
    })
  };

  return (
    <div clasNames="dropdown-container">
      {showData(props.formData)}
    </div>
  )
}