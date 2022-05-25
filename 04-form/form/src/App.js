import './variable.css';
import './App.css';
import {DropDownItem} from './componets/DropdownItem';
import {useState} from 'react';

function App() {
  const [items, setItems] = useState([
  {
    name: "Driver", 
    type: 'dropdown',
    id:1,
    elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
  },
  {
    name: "Temp", 
    type: 'number',
    id: 2
  },

  ]);
  const [selected, setSelected] = useState(null);

  const pickUser = (selection) => {
    setSelected(selection)
  }

  return (
    <div className="App">
      {items && items.map((item) => {
        return <DropDownItem 
          key={item.id}
          elements={item.elements} 
          name={item.name} 
          type={item.type} 
          selected={selected} 
          pickUser={pickUser}
        />
      })}
      
      <h1>{selected}</h1>
    </div>
  );
}

export default App;
