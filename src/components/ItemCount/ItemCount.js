import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ItemCount({stock, onAdd, initial}) {
    const [count, setCount] = useState(initial);

    const addCount = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    }
    const removeCount = () => {
      if (count > initial) {
        setCount(count - 1)
      }
    }

  return (
    <div>
    <h6>Cantidad Disponible: {stock}</h6>
    <div className='count-item'>
        <Button onClick={removeCount}>-</Button>
        <p>{count}</p>
        <Button onClick={addCount}>+</Button>
    </div>
    <div className='d-flex justify-content-center'>
        <Button className='mx-1' variant="primary" onClick={() => onAdd(count)}>COMPRAR</Button>
    </div>
    </div>
  )
}

export default ItemCount;