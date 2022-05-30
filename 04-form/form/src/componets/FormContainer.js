
import {FormItem} from './FormItem';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import '../variable.css';
import './FormContainer.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

export const FormContainer = (props) => {
  const {sectionTitle, draggable, column, elements} = props;

  const [formElements, setFormElements] = useState(elements)

  const handleOnDragEnd = (results) => {
    console.log(results)
    const list = Array.from(elements);
    console.log(list)
    const [reorderedItem] = list.splice(results.source.index, 1);
    list.splice(results.destination.index, 0, reorderedItem)
    setFormElements(list);

  }

  
  return (
    <section className="section-container">
    <h2>{sectionTitle}</h2>
    {draggable && 
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={sectionTitle} key={sectionTitle}>
          {(provided)=> (  
            <div {...provided.droppableProps} ref={provided.innerRef} className="tests" > 
              {formElements.map((inner, index) => {
                return (
                  <Draggable key={inner.id} draggableId={inner.id} index={index}>
                    {(provided, snapshot) =>(
                      <div                                               
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}  
                      >
                        <div style={{gridTemplateColumns: `repeat(${column}, 1fr)`}} className={`form-container draggable`} >
                          <FontAwesomeIcon icon={faGripVertical} className="drag-dots" />
                          {inner.list.map((item) => {
                            return <FormItem
                              key={item.id}
                              elements={item.formElements} 
                              name={item.name} 
                              type={item.type} 
                              placeholder={item.placeholder} 
                            />
                          })}
                        </div>
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
     
      {!draggable && formElements[0].list.map((item) => {
        return <FormItem
          key={item.id}
          elements={item.formElements} 
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