import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updatePhoto, updatePost } from '../../../features/async/asyncActionPosts';
import classes from '../../../UI/Peges/EditPost.module.css'
const EditModale = ({ isOpen, onRequestClose, item, initialPhotoProp }) => {
    const [editedTitle, setEditedTitle] = useState(item.title);
    const [editedPhoto, setEditedPhoto] = useState(item.imageSrc);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [initialPhoto, setInitialPhoto] = useState(initialPhotoProp);

    useEffect(() => {
        setEditedPhoto(initialPhoto);
    }, [isOpen, initialPhoto]);
    const dispatch = useDispatch();

    useEffect(() => {
        setEditedPhoto(item.imageSrc);
    }, [isOpen, item.imageSrc]);

    const handleTitleChange = (e) => {
        setEditedTitle(e.target.value);
    };

    const handleSaveChanges = async () => {
        await handleUpload();
        onRequestClose();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setEditedPhoto(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            try {
                await dispatch(updatePhoto({ formData: formData, id: item.id }));
            } catch (error) {
                console.log('Error updating photo:', error.message);
            }
        }
        dispatch(updatePost({ likes: item.likes, dislikes: item.dislikes, title: editedTitle, id: item.id }));
    };


    return (
        <Modal show={isOpen} onHide={onRequestClose}>
            <Modal.Header closeButton>
                <Modal.Title className='font'>Edit post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label className='font'>Title:</Form.Label>
                        <Form.Control className='font' type="text" value={editedTitle} onChange={handleTitleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='font'>Photo:</Form.Label>
                        <div className={classes.imgBox}>
                            <img
                               src={editedPhoto} alt={item.id} />
                            <label className="custom-file-button btn-edit "
                            >
                                Upload a photo
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                            </label>
                        </div>

                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onRequestClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditModale;
