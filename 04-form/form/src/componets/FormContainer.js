import {FormItem} from './FormItem';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import '../variable.css';
import './FormContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical } from '@fortawesome/free-solid-svg-icons'

export const FormContainer = (props) => {
  const {sectionTitle, draggable, elements, column, setItems, formIdx} = props;

  const handleOnDragEnd = (results) => {
    if(!results.destination) return;
    const list = Array.from(elements);
    const [reorderedItem] = list.splice(results.source.index, 1);
    list.splice(results.destination.index, 0, reorderedItem);
    setItems(prevState => {
      prevState[formIdx].elements = list  
      return [...prevState]
    });    
  }
  
  return (
    <section className="section-container">
    <h2>{sectionTitle}</h2>
    {draggable && 
      <div style={{minHeight: `${elements.length * 150}px`, height: `${elements.length * 150}px`}} >
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
              {elements.map((inner, innerIdx) => {
                return (
                  <Draggable key={inner.id} draggableId={inner.id} index={innerIdx}>
                    {(provided, snapshot) =>(
                      <div                                               
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}                        
                      >
                        <div style={{gridTemplateColumns: `repeat(${elements[innerIdx].list.length}, 1fr)`,   backgroundColor: snapshot.isDragging
                          ? "#e2e2e2"
                          : "#FBFBFB",}} className={`form-container draggable`} >
                          <FontAwesomeIcon icon={faGripVertical} className="drag-dots" />
                          {inner.list.map((item, idx) => {                                                  
                            return <FormItem
                              key={item.id}                            
                              name={item.name}
                              type={item.type}
                              placeholder={item.placeholder}
                              value={item.value}
                              require={item.require}
                              passedCheck={item.passedCheck}
                              formIdx={formIdx}
                              innerIdx={innerIdx}
                              itemIdx={idx}
                              setItems={setItems}
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
     
      {!draggable && elements[0].list.map((item, idx) => {
        return <FormItem
          value={item.value}
          require={item.require}
          passedCheck={item.passedCheck}
          key={item.id}
          elements={item.elements}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          formIdx={formIdx}
          itemIdx={idx}
          innerIdx={idx}
          setItems={setItems}
        />
      })}

    </div>
    }
    
  </section>
  )
}