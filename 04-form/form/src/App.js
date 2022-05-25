import './variable.css';
import './App.css';

import {FormContainer} from './componets/FormContainer';
import {DropDownItem} from './componets/DropdownItem';
import {useState} from 'react';

function App() {
  const [items, setItems] = useState([{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]);
  const [selected, setSelected] = useState(null);

  const pickUser = (selection) => {
    setSelected(selection)
  }

  return (
    <div className="App">
      <DropDownItem items={items} selected={selected} pickUser={pickUser}/>
      <h1>{selected}</h1>
    </div>
  );
}

export default App;
