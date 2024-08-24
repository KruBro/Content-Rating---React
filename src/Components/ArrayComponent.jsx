import React, { useState } from "react";
function ArrayComponent() {

    const [items, setItems] = useState(['Autumn', 'Spring', 'Winter', 'Summer']);
    const [inputValue, setInputValue] = useState('');

    //adding add item function

    const addItems = () => {
        setItems([...items, inputValue]);
        setInputValue('');
    };

    const removeItems = (index) => {
        const newItems = [...items];
        newItems.splice(index,1);
        setItems(newItems);
    }

    return(
        <div>
            <h1>Season names</h1>
            <ul>
                {items.map((item, index) => (<li key={index}>{item}
                    <button onClick={() => removeItems(index) }>Remove</button>
                </li>))}
            </ul>
            <input type="text" value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={addItems}>AddItem</button>
        </div>
    );
}
export default ArrayComponent