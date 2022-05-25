import { useEffect, useState } from "react";
import { DropdownContainer } from "./DropdownContainer";
import '../variable.css';
import './FormContainer.css'

export const FormContainer = () => {
  const [formData, setFormData] = useState([{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike'}]);
  const [colorArr, setColorArr] = useState(['Red', 'Green', 'Blue', 'Pink']);
  
  return (
    <div>
      <h1>Form Title</h1>
      <h2>Section Title</h2>
      <div className="Dropdown-container">
        
      </div>

      <button className="submit-button">Submit</button>
    </div>
  )
}