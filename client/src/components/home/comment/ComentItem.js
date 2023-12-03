import React from 'react'
import { Col, Row } from 'react-bootstrap';
import classes from '../../../UI/Peges/Comment.module.css';
import DateCom from './DateCom';
import DeletOrEdit from '../post/DeletOrEdit';
import LikesCom from './LikesCom';


const ComentItem = ({ comment, user }) => {
    return (
        <div key={comment.id} className='comment'>
            <Row className='m-0 p-0 dateC'>
                <Col sm={8} className={classes.box_col}>
                    {comment.username}
                    <DateCom className={classes.date} dateC={comment.date} />
                </Col>
                <Col>
                    {user === comment.username && <DeletOrEdit theEdit="com" item={comment} />}
                </Col>
            </Row>
            <p className='m-0 likes'>
                {comment.text}
                <LikesCom item={comment} />
            </p>
        </div>
    )
}

export default ComentItem
