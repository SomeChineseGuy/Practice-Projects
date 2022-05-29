import './variable.css';
import './App.css';
import {DropDownItem} from './componets/DropdownItem';
import {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [items, setItems] = useState(
    {
      id: 5,
      sectionTitle: 'Shipment 1',
      placeholder: '',
      value: '',
      type: 'list',
      column: 4,
      prop: 'shipments',
      draggable: true,
      elements: [
        {
          id: 6,
          type: 'element-group',
          width: '12',
          list: [
            {
              id: 7,
              entity_id: '',
              name: 'Customer',
              placeholder: 'String',
              value: '',
              type: 'string',
              width: '3',
              prop: 'customer',
            },
            {
              id: 8,
              entity_id: '',
              name: 'Purchase Order No.',
              placeholder: 'String',
              value: '',
              type: 'string',
              width: '3',
              prop: 'purchase_order_no',
            },
            {
              id: 9,
              entity_id: '',
              name: 'Shipper',
              placeholder: 'String',
              value: '',
              type: 'string',
              width: '3',
              prop: 'shipper',
            },
            {
              id: 10,
              entity_id: '',
              name: 'Cases',
              placeholder: 'Number',
              value: '',
              type: 'number',
              width: '3',
              prop: 'cases',
            }
          ]
        }
      ]
    }
    // {
    // sectionTitle: "Section Title",
    // row: 2,
    // column: 2,
    // formType: 'normal',
    // list: [
    //   {
    //     name: "Driver", 
    //     type: 'dropdown',
    //     id:1,
    //     required: true,
    //     elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
    //   },
    //   {
    //     name: "Temp", 
    //     type: 'number',
    //     id: 2,
    //     required: true,
    //   },

    //   {
    //     id: 3,
    //     name: 'Truck',
    //     type: 'dropdown',
    //     width: '6',
    //     prop: 'driver',
    //     required: true,
    //     elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
    //   },
    //   {
    //     id: 4,
    //     name: 'Trailer',
    //     type: 'dropdown',
    //     width: '6',
    //     prop: 'trailer',
    //     required: true,
    //     elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
    //   },
    // ]}
    );
  const [selected, setSelected] = useState(null);

  const pickUser = (selection) => {
    setSelected(selection)
  }

  return (
    <div className="App" >
      <h1>Form Title</h1>
      <section className="section-container">
        <h2>{items.sectionTitle}</h2>
        <div className={`form-container ${items.draggable ? "draggable" : ""}` } style={{gridTemplateColumns: `repeat(${items.column}, 1fr)`}} >
          {items.draggable && <FontAwesomeIcon icon={faGripVertical} className="drag-dots" />}
          {items && items.elements[0].list.map((item) => {
            return <DropDownItem
              key={item.id}
              elements={item.elements} 
              name={item.name} 
              type={item.type} 
              placeholder={item.placeholder} 
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
