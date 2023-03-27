import React from 'react';
import { add } from '../Calculate/Calculate';


const Cosmetics = () => {
    // const first = 20;
    // const second = 44;
    // const result = add(first , second)
    const cosmetics = [
        { id: 1, name: 'Alta', price: 200 },
        { id: 2, name: 'nail palis', price: 300 },
        { id: 3, name: 'kajol', price: 400 },
        { id: 4, name: 'curi', price: 500 }
    ]
    return (
        <div>
            <h1>Welcome to our Cosmetics store</h1>
            {/* <h1>Welcome to our Cosmetics store</h1>
            <h3>Here is your favorite cosmetics</h3>
            <div style={{border: '2px solid blue', width: '200px', margin:'auto'}}>
                
                <h3>Name: eyeliner</h3>
                <p>Price : {result}</p>
            </div> */}
            {
                cosmetics.map(cosmetic => console.log(cosmetic))
            }


        </div>
    );
};

export default Cosmetics;