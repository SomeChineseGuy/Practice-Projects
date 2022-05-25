import './variable.css';
import './App.css';
import {DropDownItem} from './componets/DropdownItem';
import {useState} from 'react';

function App() {
  const [items, setItems] = useState({
    sectionTitle: "Section Title",
    row: 2,
    column: 2,
    formType: 'normal',
    list: [
      {
        name: "Driver", 
        type: 'dropdown',
        id:1,
        required: true,
        elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
      },
      {
        name: "Temp", 
        type: 'number',
        id: 2,
        required: true,
      },

      {
        id: 3,
        name: 'Truck',
        type: 'dropdown',
        width: '6',
        prop: 'driver',
        required: true,
        elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
      },
      {
        id: 4,
        name: 'Trailer',
        type: 'dropdown',
        width: '6',
        prop: 'trailer',
        required: true,
        elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
      },
    ]
  });
  const [selected, setSelected] = useState(null);

  const pickUser = (selection) => {
    setSelected(selection)
  }

  return (
    <div className="App" >
      <h1>Form Title</h1>
      <section class="section-container">
        <h2>{items.sectionTitle}</h2>
        <div className='form-container' style={{gridTemplateColumns: `repeat(${items.column}, 1fr)`}} >
          
          {items && items.list.map((item) => {
            return <DropDownItem 
              key={item.id}
              elements={item.elements} 
              name={item.name} 
              type={item.type} 
              selected={selected} 
              pickUser={pickUser}
            />
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
