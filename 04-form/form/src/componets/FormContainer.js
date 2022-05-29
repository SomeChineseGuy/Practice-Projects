
import { useEffect, useState, useRef } from "react";
import {FormItem} from './FormItem';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import '../variable.css';
import './FormContainer.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

export const FormContainer = (props) => {
  const {sectionTitle, draggable, column, elements} = props;

  
  return (
    <section className="section-container">
    <h2>{sectionTitle}</h2>
    {draggable && 
      <DragDropContext>
        <Droppable droppableId="driver">
          {(provided)=> (  
            <div ref={provided.innerRef} {...provided.droppableProps}  > 
              {elements.map((inner, index) => {
                return (
                  <Draggable key={inner.id} draggableId={inner.name} index={index} >
                    {provided =>(
                      <div                       
                        ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                        style={{gridTemplateColumns: `repeat(${column}, 1fr)`}}
                        className="form-container draggable" 
                      >
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
                    )}
                
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
            )}
        </Droppable>
      </DragDropContext>
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