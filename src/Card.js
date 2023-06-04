import React, { useEffect, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Card = ({ no, allcat, closeCard }) => {
    const [index, setindex] = useState(no);
    const [show, setshow] = useState();
    const firstIndex = allcat[0].id;
    const lastIndex = allcat[allcat.length - 1].id;

    useEffect(() => {
        const showoutput = async () => {
            const find = await allcat.filter((elm) => elm.id === index);
            setshow(find[0]);
        }
        showoutput();
    }, [index, no, allcat])



    return (
        <>
            <div className='card'>
                <div className='btn' onClick={() => {
                    if (firstIndex >= index) {
                        setindex(lastIndex)
                    } else {
                        setindex(prev => (prev - 1))
                    }
                }}><ExpandLessIcon /></div>
                <div className='card_wrapper'>
                    <div className='close'><button onClick={() => {
                        closeCard(-1);
                    }}>X</button></div>
                    {show && (
                        <div>
                            <h1>{show.title}</h1>
                            <p>{show.body}</p>
                            <button onClick={() => {
                                closeCard(-1);
                            }}>Read later</button>
                        </div>
                    )}
                </div>
                <div className='btn1' onClick={() => {
                    if (lastIndex <= index) {
                        setindex(firstIndex);
                    } else {
                        setindex(prev => (prev + 1))
                    }
                }}><ExpandLessIcon /></div>
            </div>
        </>
    )
}

export default Card;