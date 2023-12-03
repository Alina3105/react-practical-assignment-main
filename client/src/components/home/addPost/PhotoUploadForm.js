import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const PhotoUploadForm = ({ fileInputRef, handleFileChange }) => {
  return (
    <Form>
      <Row className="justify-content-center">
        <Col xs="auto">
          <label className="custom-file-button labelButt">
            Upload a photo
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </label>
        </Col>
      </Row>
    </Form>
  );
};

export default PhotoUploadForm;