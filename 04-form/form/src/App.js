import './variable.css';
import './App.css';
import {FormContainer} from './componets/FormContainer';
import {useState} from 'react';
import axios from 'axios';


function App() {
  const [readySend, setReadySend] = useState(false);
  const [itemCheck, setItemCheck] = useState(true);
  const [items, setItems] = useState([{
    id: 1,
    sectionTitle: 'Shipments August',
    type: 'list',
    column: 4,
    prop: 'shipments',
    draggable: true,
    elements: [
      {
        id: "2",
        type: 'element-group',
        width: '12',
        name: "driver-picker",
        list: [
          {
            id: 3,          
            name: 'Customer 1',
            placeholder: 'String',
            value: '',
            require: true,
            passedCheck: true,
            type: 'string',
            width: '3',
            prop: 'customer',
          },
          {
            id: 4,          
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
            id: 5,          
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
            id: 6,          
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
        id: "7",
        type: 'element-group',
        width: '12',
        name: "driver-picker",
        list: [
          {
            id: 8,          
            name: 'Customer 2',
            placeholder: 'String',
            value: '',
            require: true,
            passedCheck: true,
            type: 'string',
            width: '3',
            prop: 'customer',
          },
          {
            id: 9,          
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
            id: 10,          
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
            id: 11,          
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
        id: "12",
        type: 'element-group',
        width: '12',
        name: "driver-picker",
        list: [
          {
            id: 13,          
            name: 'Customer 3',
            placeholder: 'String',
            value: '',
            require: true,
            passedCheck: true,
            type: 'string',
            width: '3',
            prop: 'customer',
          },
          {
            id: 14,          
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
            id: 15,          
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
            id: 16,          
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
        id: "17",
        type: 'element-group',
        width: '12',
        name: "driver-picker",
        list: [
          {
            id: 18,          
            name: 'Customer 4',
            placeholder: 'String',
            value: '',
            require: true,
            passedCheck: true,
            type: 'string',
            width: '3',
            prop: 'customer',
          },
          {
            id: 19,          
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
            id: 20,          
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
            id: 21,          
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
  sectionTitle: "Walmart Shipments",
  row: 2,
  column: 2,
  id: 22,
  formType: 'normal',
  elements: [
    {
      id: 23,
      type: 'element-group',
      width: '12',
      list: [
        {
          name: "Driver", 
          type: 'dropdown',
          id: 24,
          require: true,
          passedCheck: true,
          value:'',
          elements: [{ id: 1, value: 'Steve' }, { id: 2, value: 'Mike' }]
        },
        {
          name: "Temp", 
          type: 'number',
          placeholder: "Number",
          id: 25,
          require: true,
          passedCheck: true,
          value:'',
        },
  
        {
          id: 26,
          name: 'Truck',
          type: 'dropdown',
          width: '6',
          prop: 'driver',
          require: true,
          passedCheck: true,
          value:'',
          elements: [{ id: 1, value: 'Red 7' }, { id: 2, value: 'Green 2' }]
        },
        {
          id: 27,
          name: 'Trailer',
          type: 'dropdown',
          width: '6',
          prop: 'trailer',
          require: true,
          passedCheck: true,
          value:'',
          elements: [{ id: 1, value: 'Large' }, { id: 2, value: 'Small' }]
        },
      ]
    }
  ]
  }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!readySend) {
      setItems(prevState => {
        let newState = prevState;
        newState.forEach((item, itemIdx) => {
          item.elements.forEach((element, eleIdx) => {
            element.list.forEach((listItem, listIdx) => {
              if(listItem.require && !listItem.value) {
                setItemCheck(false)
                newState[itemIdx].elements[eleIdx].list[listIdx].passedCheck = false;                              
              }
            })
          })
        })
        if(itemCheck) setReadySend(true);
        setItemCheck(true);
        return newState
      })
    } else {
      axios.post('http://localhost:3000/api/data', {
        data: items
      }).then((res) => {
        console.log(res)
      }).catch((res) => {
        console.log(res)
      })
    }
  }



  return (
    <div className="App" >
      <h1>Form Title</h1>      
        {items && items.map((form, idx) => {
          return <FormContainer                        
            key={form.id}
            sectionTitle={form.sectionTitle}
            draggable={form.draggable}
            elements={form.elements}
            formIdx={idx}
            column={form.column}
            {...items}
            setItems={setItems}
          />
        })}
        <section className='submit-container'>
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </section>

    </div>
  );
}

export default App;
