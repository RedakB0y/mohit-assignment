import React, { useState } from 'react';
import Card from './Card';

const Subcat = ({ categorydata }) => {
    const [number, setNumber] = useState();

    function closeCard(value) {
        setNumber(value);
    }

    return (
        <div className='subcategory'>
            {categorydata && categorydata.map((sc, index) => {
                return (
                    <div key={sc.id}>
                        <button className='category' onClick={() => {
                            setNumber(sc.id);
                        }}>
                            subcategory {index + 1}
                        </button>
                        {sc.id === number && <Card no={number} allcat={categorydata} closeCard ={closeCard} />}
                    </div>
                )
            })
            }
        </div>
    )
}

export default Subcat;