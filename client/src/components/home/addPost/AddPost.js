import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import MyButton from '../../../UI/MyButton.js/MyButton';
import MyButtonCercle from '../../../UI/MyButton.js/MyButtonCercle';
import { addPost } from '../../../features/async/asyncActionPosts';
import CommentField from '../comment/CommentField';
import PhotoPreview from './PhotoPreview';
import PhotoUploadForm from './PhotoUploadForm';

const PhotoUploadModal = () => {

    const dispatch = useDispatch();
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [contentVisible, setContentVisible] = useState(false);
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState("  ");
    const user = localStorage.getItem("username");
    const [imageUrl, setImageUrl] = useState('');


    /* get photo link */
    useEffect(() => {
        if (selectedFile) {
            handleUpload();
        }
    }, [selectedFile]);


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setContentVisible(true);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', selectedFile);
        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=4a8d3c276cc1ca00dcc7d1b99e4a0444', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Image upload successful');
                setImageUrl(data.data.url);
            } else {
                console.error('Image upload failed.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    /* comment */
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };


    /*  send post  */
    const handlePhotoUpload = async () => {
        dispatch(addPost({comment, imageUrl, user}));
        setSelectedFile(null);
        setContentVisible(false);
        setComment(' ');
        handleClose();
        setSelectedFile(null);
        setContentVisible(false);
        handleClose();
    }

    const handleClose = () => {
        setShow(false);
        setSelectedFile(null);
        setContentVisible(false);
    };
    const handleShow = () => setShow(true);

    const photoTFalse = () => {
        return (
            <PhotoUploadForm fileInputRef={fileInputRef} handleFileChange={handleFileChange} />
        );
    }
    const photoTrue = () => {
        return (
            <Row>
                <PhotoPreview selectedFile={selectedFile} />
                <CommentField handleCommentChange={handleCommentChange} />
            </Row>
        );
    }


    return (
        <>
            <MyButtonCercle variant="info" onClick={handleShow}>
                +
            </MyButtonCercle>
            <Modal show={show} onHide={handleClose} size={selectedFile ? 'lg' : 'sm'} centered>
                <Modal.Header closeButton style={{ borderBottom: '0px', height: '10%' }}>
                </Modal.Header>
                <Modal.Body >
                    {selectedFile ? photoTrue() : photoTFalse()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    {selectedFile ? <MyButton onClick={handlePhotoUpload}>Upload </MyButton> : ''}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PhotoUploadModal;
