import React, { useEffect } from 'react'
import ComentItem from './ComentItem';
import classes from '../../../UI/Peges/Comment.module.css';

const ComentList = ({ comments, user }) => {
    useEffect(() => {

        console.log(comments.length)
        console.log(comments)
    }, [])
    return (
        <div>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <ComentItem key={comment.id} comment={comment} user={user} />
                ))) : (
                <div className={classes.noCom}>no comments...</div>
                )
            }
        </div>
    );
}

export default ComentList