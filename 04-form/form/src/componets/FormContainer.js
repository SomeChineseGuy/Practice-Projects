import { useEffect, useState } from "react";
import {FormItem} from './FormItem';
import '../variable.css';
import './FormContainer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

export const FormContainer = (props) => {
  const {sectionTitle, draggable, column, elements} = props;

  
  return (
    <section className="section-container">
    <h2>{sectionTitle}</h2>
    <div className={`form-container ${draggable ? "draggable" : ""}` } style={{gridTemplateColumns: `repeat(${column}, 1fr)`}} >
      {draggable && <FontAwesomeIcon icon={faGripVertical} className="drag-dots" />}
      {elements && elements[0].list.map((item) => {
        return <FormItem
          key={item.id}
          elements={item.elements} 
          name={item.name} 
          type={item.type} 
          placeholder={item.placeholder} 
        />
      })}
    </div>
  </section>
  )
}