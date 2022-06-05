import './variable.css';
import './App.css';
import {FormContainer} from './componets/FormContainer';
import {useState, useReducer, useEffect} from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "submitForm": {
      state.forEach(item => {
        return item["elements"].forEach(ele => {
          return ele["list"].forEach(listItem => {
            if(listItem.value === '') {
              return listItem.passedCheck = false
            }            
          })
        })
      })
    }
    default: return state;
  }
}


function App() {
  const [items, dispatch] = useReducer(reducer,
    [
    {
      id: 5,
      sectionTitle: 'Shipment 1',
      type: 'list',
      column: 4,
      prop: 'shipments',
      draggable: true,
      elements: [
        {
          id: "20",
          type: 'element-group',
          width: '12',
          name: "driver-picker",
          list: [
            {
              id: 7,
              entity_id: '',
              name: 'Customer1',
              placeholder: 'String',
              value: '',
              require: true,
              passedCheck: true,
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
              require: true,
              passedCheck: true,
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
              require: true,
              passedCheck: true,
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
              require: true,
              passedCheck: true,
              type: 'number',
              width: '3',
              prop: 'cases',
            }
          ]
        },
        {
          id: "21",
          type: 'element-group',
          width: '12',
          name: "driver-picker",
          list: [
            {
              id: 27,
              entity_id: '',
              name: 'Customer2',
              placeholder: 'String',
              value: '',
              require: true,
              passedCheck: true,
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
              require: true,
              passedCheck: true,
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
              require: true,
              passedCheck: true,
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
              require: true,
              passedCheck: true,
              type: 'number',
              width: '3',
              prop: 'cases',
            }
          ]
        },
        {
          id: "22",
          type: 'element-group',
          width: '12',
          name: "driver-picker",
          list: [
            {
              id: 37,
              entity_id: '',
              name: 'Customer3',
              placeholder: 'String',
              value: '',
              require: true,
              passedCheck: true,
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
              require: true,
              passedCheck: true,
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
              require: true,
              passedCheck: true,
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
              require: true,
              passedCheck: true,
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
            require: true,
            passedCheck: true,
            value:'',
            elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
          },
          {
            name: "Temp", 
            type: 'number',
            placeholder: "Number",
            id: 12,
            require: true,
            passedCheck: true,
            value:'',
          },

          {
            id: 13,
            name: 'Truck',
            type: 'dropdown',
            width: '6',
            prop: 'driver',
            require: true,
            passedCheck: true,
            value:'',
            elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
          },
          {
            id: 222,
            name: 'Trailer',
            type: 'dropdown',
            width: '6',
            prop: 'trailer',
            require: true,
            passedCheck: true,
            value:'',
            elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
          },
        ]
      }
    ]}
  ]);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'submitForm'})
  }

  return (
    <div className="App" >
      <h1>Form Title</h1>      
        {items && items.map((form, idx) => {
          return <FormContainer            
            key={form.id}
            sectionTitle={form.sectionTitle}
            draggable={form.draggable}
            column={form.column}
            elements={form.elements}
            formIdx={idx}
          />
        })}
        <section className='submit-container'>
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </section>

    </div>
  );
}

export default App;
