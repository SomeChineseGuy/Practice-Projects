const data = {
  
  elements: [
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
    {
      id: 5,
      name: 'Shipment 1',
      placeholder: '',
      value: '',
      type: 'list',
      width: '12',
      prop: 'shipments',
      draggable: true,
      elements: [
        {
          id: 6,
          type: 'element-group',
          width: '12',
          elements: [
            {
              id: 7,
              entity_id: '',
              name: 'Customer',
              placeholder: '',
              value: '',
              type: 'string',
              width: '3',
              prop: 'customer',
            },
            {
              id: 8,
              entity_id: '',
              name: 'Purchase Order No.',
              placeholder: '',
              value: '',
              type: 'string',
              width: '3',
              prop: 'purchase_order_no',
            },
            {
              id: 9,
              entity_id: '',
              name: 'Shipper',
              placeholder: '',
              value: '',
              type: 'string',
              width: '3',
              prop: 'shipper',
            },
            {
              id: 10,
              entity_id: '',
              name: 'Cases',
              placeholder: '',
              value: '',
              type: 'number',
              width: '3',
              prop: 'cases',
            }
          ]
        }
      ]
    }
  ],


  section: {
    id: 1,
    title: 'Section 1',
    elements: elements
  },


  form: {
    id: 1,
    title: 'Form Title',
    sections: [
      section
    ],
    actions: [
      {
        title: 'Save',
        endpoint: {
          method: 'put',
          path: 'https://api.oldmate.com/form/abc123'
        }
      }
    ]
  }
}


const data2 = {
  sections: [
    {
      formTitle: "Section Title",
      formType: "normal",
      elements: [
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
        }
      ]
    },
    {
      formTitle: "Delivers",
      formType: "drag-drop",
      elements: [
        {
          id: 7,
          entity_id: '',
          name: 'Customer',
          placeholder: '',
          value: '',
          type: 'string',
          width: '3',
          prop: 'customer',
        },
        {
          id: 8,
          entity_id: '',
          name: 'Purchase Order No.',
          placeholder: '',
          value: '',
          type: 'string',
          width: '3',
          prop: 'purchase_order_no',
        },
        {
          id: 9,
          entity_id: '',
          name: 'Shipper',
          placeholder: '',
          value: '',
          type: 'string',
          width: '3',
          prop: 'shipper',
        },
        {
          id: 10,
          entity_id: '',
          name: 'Cases',
          placeholder: '',
          value: '',
          type: 'number',
          width: '3',
          prop: 'cases',
        }
      ]
    }
  ]
}