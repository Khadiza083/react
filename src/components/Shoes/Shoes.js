import React from 'react';
import { multiply } from '../Calculate/Calculate';

const Shoes = () => {
    const total = multiply(23, 34)
    return (
        <div>
            <h3>Here is your favorite shoes.</h3>
            <div style={{border: '2px solid blue', width: '200px', margin:'auto'}}>
                
                <h3>Name: Apex 23</h3>
                <p>Price : {total}</p>
            </div>
        </div>
    );
};

export default Shoes;