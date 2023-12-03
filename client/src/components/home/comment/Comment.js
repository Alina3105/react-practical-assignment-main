import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import classes from '../../../UI/Peges/Comment.module.css';
import { sendComment } from '../../../features/async/asyncActionPosts';
import ComentList from './ComentList';


const Comment = ({ item }) => {
  const [comment, setComment] = useState('')
  const user = localStorage.getItem("username");
  const dispatch = useDispatch();
  
  const handleCommentChange = (event) => {
    setComment(event.target.value);

  }
  const handleSendComment = () => {
    dispatch(sendComment({ comment: comment, id: item.id, user: user }));
    setComment('');
  }

  return (
    <div>
      <Form.Group controlId="commentField">
        <div className={classes.box}>
          <ComentList comments={item.comments} user={user} />
        </div>
        <Form.Control
          className='mt-2 filter'
          value={comment}
          onChange={handleCommentChange}
          as="textarea"
          rows={3}
          placeholder="Enter your comment..." />
      </Form.Group>
      <Button variant="secondary" size='sm' onClick={handleSendComment} className='mt-2'>Send</Button>
    </div>
  )
}

export default Comment









