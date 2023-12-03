import React from 'react';
import { Col, Form } from 'react-bootstrap';

const CommentField = ({  handleCommentChange }) => {
  return (
    <Col xs={12} md={6}>
      <Form.Group controlId="commentField">
        <Form.Control
          onChange={handleCommentChange}
          as="textarea" rows={3}
          placeholder="Enter your title..."
        />
      </Form.Group>
    </Col>
  );
};
export default CommentField;