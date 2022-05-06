import { useEffect, useState } from "react";
import { DropdownContainer } from "./DropdownContainer";

export const FormContainer = () => {
  const [formData, setFormData] = useState([
    {
      id: 1,
      name: 'Driver',
      placeholder: '',
      value: '',
      type: 'option',
      width: '6',
      prop: 'driver',
      required: true,
      options: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
    },
    {
      id: 2,
      name: 'Truck',
      placeholder: '',
      value: '',
      type: 'option',
      width: '6',
      prop: 'driver',
      required: true,
      options: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
    },
    {
      id: 3,
      name: 'Trailer',
      placeholder: '',
      value: '',
      type: 'option',
      width: '6',
      prop: 'trailer',
      required: true,
      options: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
    },
    {
      id: 4,
      name: 'Temp',
      placeholder: '',
      value: '',
      type: 'number',
      width: '6',
      prop: 'temp',
      required: true,
    },
  ]);
  return (
    <div>
      <h1>Form Title</h1>
      <h2>Section Title</h2>
      <DropdownContainer formData={formData} />

    </div>
  )
}