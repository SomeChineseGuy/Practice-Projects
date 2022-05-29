import './variable.css';
import './App.css';
import {FormContainer} from './componets/FormContainer';
import {useState} from 'react';



function App() {
  const [items, setItems] = useState(
    [
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
        },
        {
          id: 26,
          type: 'element-group',
          width: '12',
          list: [
            {
              id: 27,
              entity_id: '',
              name: 'Customer',
              placeholder: 'String',
              value: '',
              type: 'string',
              width: '3',
              prop: 'customer',
            },
            {
              id: 28,
              entity_id: '',
              name: 'Purchase Order No.',
              placeholder: 'String',
              value: '',
              type: 'string',
              width: '3',
              prop: 'purchase_order_no',
            },
            {
              id: 29,
              entity_id: '',
              name: 'Shipper',
              placeholder: 'String',
              value: '',
              type: 'string',
              width: '3',
              prop: 'shipper',
            },
            {
              id: 210,
              entity_id: '',
              name: 'Cases',
              placeholder: 'Number',
              value: '',
              type: 'number',
              width: '3',
              prop: 'cases',
            }
          ]
        },
        {
          id: 36,
          type: 'element-group',
          width: '12',
          list: [
            {
              id: 37,
              entity_id: '',
              name: 'Customer',
              placeholder: 'String',
              value: '',
              type: 'string',
              width: '3',
              prop: 'customer',
            },
            {
              id: 38,
              entity_id: '',
              name: 'Purchase Order No.',
              placeholder: 'String',
              value: '',
              type: 'string',
              width: '3',
              prop: 'purchase_order_no',
            },
            {
              id: 39,
              entity_id: '',
              name: 'Shipper',
              placeholder: 'String',
              value: '',
              type: 'string',
              width: '3',
              prop: 'shipper',
            },
            {
              id: 310,
              entity_id: '',
              name: 'Cases',
              placeholder: 'Number',
              value: '',
              type: 'number',
              width: '3',
              prop: 'cases',
            }
          ]
        },
      ]
    },
    {
    sectionTitle: "Section Title",
    row: 2,
    column: 2,
    id: 999,
    formType: 'normal',
    elements: [
      {
        id: 16,
        type: 'element-group',
        width: '12',
        list: [
          {
            name: "Driver", 
            type: 'dropdown',
            id: 11,
            required: true,
            elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
          },
          {
            name: "Temp", 
            type: 'number',
            placeholder: "Number",
            id: 12,
            required: true,
          },

          {
            id: 13,
            name: 'Truck',
            type: 'dropdown',
            width: '6',
            prop: 'driver',
            required: true,
            elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
          },
          {
            id: 222,
            name: 'Trailer',
            type: 'dropdown',
            width: '6',
            prop: 'trailer',
            required: true,
            elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
          },
        ]
      }
    ]}
  ]);
  const [selected, setSelected] = useState(null);

  const pickUser = (selection) => {
    setSelected(selection)
  }

  return (
    <div className="App" >
      <h1>Form Title</h1>
      {items && items.map(form => {
        return <FormContainer
          key={form.id}
          sectionTitle={form.sectionTitle}
          draggable={form.draggable}
          column={form.column}
          elements={form.elements}
        />
      })}
    </div>
  );
}

export default App;
