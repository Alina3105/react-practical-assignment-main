import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import classes from '../../../UI/Post.module.css';
import DeletOrEdit from './DeletOrEdit';
import Likes from './Likes';

const MAX_CHARACTERS = 30;
const Posts = ({ item }) => {

  const user = localStorage.getItem("username");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <Card className={classes.box}>
      <Card.Img variant="top" src={item.imageSrc} className='post' />
      <Card.Body>
        <Row>
          <Col xs={9}>
            <Card.Title className='filter'>{item.username}</Card.Title>
          </Col>
          <Col xs={1}>
            {item.username === user && <DeletOrEdit theEdit="post" item={item} />}
          </Col>
        </Row>
        <Card.Text className='filter m-0 p-0'>
          {isExpanded ? item.title : `${item.title.slice(0, MAX_CHARACTERS)}${item.title.length > MAX_CHARACTERS ? ('...') : ''}`}
        </Card.Text>
        {item.title.length > MAX_CHARACTERS && (
          <button style={{ backgroundColor: 'transparent', border: 0, paddingInline: 0, margin: 0, color: 'grey' }} variant='link' onClick={toggleExpand}>
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        )}
        <Likes item={item} />
      </Card.Body>
    </Card >
  )
}

export default Posts