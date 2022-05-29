import { useEffect, useState } from "react";
import {FormItem} from './FormItem';
import '../variable.css';
import './FormContainer.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

export const FormContainer = (props) => {
  const {sectionTitle, draggable, column, elements} = props;

  
  return (
    <section className="section-container">
    <h2>{sectionTitle}</h2>
    {draggable && elements.map(inner => {
      return (
        <div key={inner.id} className="form-container draggable" style={{gridTemplateColumns: `repeat(${column}, 1fr)`}}>
          <FontAwesomeIcon icon={faGripVertical} className="drag-dots" />
          {inner.list.map((item) => {
            return <FormItem
              key={item.id}
              elements={item.elements} 
              name={item.name} 
              type={item.type} 
              placeholder={item.placeholder} 
            />
          })}
        </div>
      )
    })
      
    }
  
    {!draggable && 
      <div className="form-container"  style={{gridTemplateColumns: `repeat(${column}, 1fr)`}} >
     
      {!draggable && elements[0].list.map((item) => {
        return <FormItem
          key={item.id}
          elements={item.elements} 
          name={item.name} 
          type={item.type} 
          placeholder={item.placeholder} 
        />
      })}
    </div>
    }
    
  </section>
  )
}