import './variable.css';
import './App.css';
import {DropDownItem} from './componets/DropdownItem';
import {useState} from 'react';

function App() {
  const [items, setItems] = useState({
    sectionTitle: "Section Title",
    row: 2,
    column: 2,
    list: [
      {
        name: "Driver", 
        type: 'dropdown',
        id:1,
        row: 2,
        column: 2,
        required: true,
        elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
      },
      {
        name: "Temp", 
        type: 'number',
        id: 2,
        row: 2,
        column: 2,
        required: true,
      },

      {
        id: 3,
        name: 'Truck',
        type: 'dropdown',
        width: '6',
        prop: 'driver',
        required: true,
        row: 2,
        column: 2,
        elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
      },
      {
        id: 4,
        name: 'Trailer',
        type: 'dropdown',
        width: '6',
        prop: 'trailer',
        required: true,
        row: 2,
        column: 2,
        elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
      },
    ]
  });
  const [selected, setSelected] = useState(null);

  const pickUser = (selection) => {
    setSelected(selection)
  }

  return (
    <div className="App">
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
  );
}

export default App;
