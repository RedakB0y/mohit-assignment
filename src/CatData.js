import React, { useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Subcat from './Subcat';


const CatData = () => {
    const categ = useSelector(state => state.data);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPost = async () => {
            const fetchdata = await axios.get("https://jsonplaceholder.typicode.com/posts");

            const PostsArray = fetchdata.data.reduce((acc, post) => {
                const userId = post.userId;
                if (!acc[userId]) {
                    acc[userId] = [];
                }
                acc[userId].push(post);
                return acc;
            }, []);
            dispatch({ type: 'category', payload: PostsArray });
            // setcat(PostsArray);
        }
        fetchPost();
    }, [dispatch]);
    return (
        <div>
            {categ[0] && categ[0].map((c, index) => {
                return (
                    <div key={index} style={{"position":"relative"}}>
                        <button className='category'>
                            Category {index}
                        </button>
                        <Subcat categorydata={c} />
                    </div>
                )
            })}
        </div>
    )
}

export default CatData;