import './App.css';
import { useState } from 'react';

function App() {
  const [colorArr, setColorArr] = useState(['Red', 'Green', 'Blue', 'Pink']);
  const [currentColor, setCurrentColor] = useState('Red');
  const [isOpen, setIsOpen] = useState(false);

  const DropDownItem = (props) => {
    return(
      <li className='dropdown-item' onClick={()=> setCurrentColor(props.children)}>
        <p>{props.children}</p>
      </li>
    )
  }


  return (
    <div className="App">
      <h1>Hello world</h1>
      <div className='bar' style={{backgroundColor: `${currentColor}`}}></div>
      <div className='dropdown-conatiner' onClick={() => setIsOpen(!isOpen)}>
        <ul >
          <li style={isOpen ? {fontStyle: 'italic', opacity: '0.5'} : {} }>{isOpen ? 'Select' : currentColor}</li>
          {isOpen && colorArr.map((item, index) => {
            return <DropDownItem key={index}>{item}</DropDownItem>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
