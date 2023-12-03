import React from 'react';
import { Col, Image } from 'react-bootstrap';

const PhotoPreview = ({ selectedFile }) => {
    return (
        <Col xs={12} md={6}>
            <Image
                src={URL.createObjectURL(selectedFile)}
                alt="Uploaded"
                fluid
            />
        </Col>
    );
};
export default PhotoPreview