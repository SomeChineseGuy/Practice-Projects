import { useState } from "react";


export const DropdownContainer = (props) => {
  const DropdownItem = (props) => {
    const [selected, setSelected] = useState(null)
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
                <li>Select</li>
              {item.options.map((inner) => {
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

  showData(props.formData)
  return (
    <ul>
      {showData(props.formData)}
    </ul>
  )
}