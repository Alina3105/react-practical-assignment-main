import React, { useState } from 'react';
import { FcDislike, FcLike } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { updateCom } from '../../../features/async/asyncActionPosts';

const LikesCom = ({ item }) => {
    const dispatch = useDispatch(); 
    const [likes, setLikes] = useState(item.likes);
    const [dislakes, setDislakes] = useState(item.dislikes);
    const like = likes.reduce((total, num) => total + parseInt(num), 0);
    const dislike = dislakes.reduce((total, num) => total + parseInt(num), 0);


    const handleLike = () => {
        setLikes(prevLikes => [...prevLikes, 1]);
        dispatch(updateCom({ likes: [...likes, 1], dislikes: dislakes, title: item.text, id: item.id }));
    }

    const handlDislike = () => {
        setDislakes(prevDislikes => [...prevDislikes, 1]);
        dispatch(updateCom({ likes, dislikes: [...dislakes, 1], title: item.title, id: item.id }));
    }

    return (
        <div>
            <button className='like' onClick={handleLike}>
                <FcLike size={12} />{like}
            </button>
            <button className='like' onClick={handlDislike}>
                <FcDislike size={12} />{dislike}
            </button>
        </div>
    )
}

export default LikesCom