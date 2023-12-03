import React, { useState } from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { FcDislike, FcLike } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import Comment from '../comment/Comment';
import { updatePost } from '../../../features/async/asyncActionPosts';
const Likes = ({ item, com }) => {


    const [trueOrFalse, setTrueOrFalse] = useState(false)
    const [likes, setLikes] = useState(item.likes);
    const [dislakes, setDislakes] = useState(item.dislikes);
    const like = likes.reduce((total, num) => total + parseInt(num), 0);
    const dislike = dislakes.reduce((total, num) => total + parseInt(num), 0);

    const dispatch = useDispatch();

    const hendleClickComment = () => {
        setTrueOrFalse(!trueOrFalse);
          }
    const handleLike = () => {
        setLikes(prevLikes => [...prevLikes, 1]);
        dispatch(updatePost({ likes: [...likes, 1], dislikes: dislakes, title: item.title, id: item.id }));
    }
    
    const handlDislike = () => {
        setDislakes(prevDislikes => [...prevDislikes, 1]);
        dispatch(updatePost({ likes, dislikes: [...dislakes, 1], title: item.title, id: item.id }));
    }

    return (
        <div>
            <button className='like' onClick={handleLike}>
                <FcLike size={24} />{like}
            </button>
            <button className='like' onClick={handlDislike}>
                <FcDislike size={24} />{dislike}
            </button>
            <button onClick={hendleClickComment} className='like'>
                <AiOutlineComment size={24} />
            </button>
            {trueOrFalse ? <Comment item={item} /> : ""}

        </div>
    )
}

export default Likes