
import {FormItem} from './FormItem';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import '../variable.css';
import './FormContainer.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

export const FormContainer = (props) => {
  const {sectionTitle, draggable, column, elements} = props;

  const [formElements, setFormElements] = useState(elements)

  const handleOnDragEnd = (results) => {
    if(!results.destination) return;
    console.log("before", formElements)
    console.log("Destinatino",results)
    const list = Array.from(elements);
    const [reorderedItem] = list.splice(results.source.index, 1);
    list.splice(results.destination.index, 0, reorderedItem)
    console.log("After:", list)
    setFormElements(list);
  }

  useEffect(() => {

  },[formElements])

  
  return (
    <section className="section-container">
    <h2>{sectionTitle}</h2>
    {draggable && 
      <div style={{height: `${formElements.length * 150}px`}} >
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId={sectionTitle} key={sectionTitle}>
          {(provided, snapshot)=> (  
            <div 
              {...provided.droppableProps} 
              ref={provided.innerRef} 
              className="single-draggable" 
              style={{height: `100%`, 
               background: snapshot.isDraggingOver ? "": "white",
              }}  
            > 
              {formElements.map((inner, index) => {
                return (
                  <Draggable key={inner.id} draggableId={inner.id} index={index}>
                    {(provided, snapshot) =>(
                      <div                                               
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        

                      >
                        <div style={{gridTemplateColumns: `repeat(${column}, 1fr)`,   backgroundColor: snapshot.isDragging
                          ? "#e2e2e2"
                          : "#FBFBFB",}} className={`form-container draggable`} >
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
      </div>
    }
  
    {!draggable && 
      <div className="form-container"  style={{gridTemplateColumns: `repeat(${column}, 1fr)`}} >
     
      {!draggable && formElements[0].list.map((item) => {
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