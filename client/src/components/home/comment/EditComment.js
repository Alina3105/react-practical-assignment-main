import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateCom } from '../../../features/async/asyncActionPosts';
import MyButton from '../../../UI/MyButton.js/MyButton';

const EditComment = ({ isOpen, onRequestClose, item }) => {
    const [editedTitle, setEditedTitle] = useState(item.text);
    const dispatch = useDispatch();
    useEffect(() => {
      
    }, [isOpen]);
   
    const handleTitleChange = (e) => {
        setEditedTitle(e.target.value);
    };
    const handleSaveChanges = async () => {
        await handleUpload();
        onRequestClose();
    };

    const handleUpload = async () => {
        dispatch(updateCom({ likes: item.likes, dislikes: item.dislikes, title: editedTitle, id: item.id }));
    };


    return (
        <Modal show={isOpen} onHide={onRequestClose}>
            <Modal.Header closeButton>
                <Modal.Title className='font'>Edit comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label className='font'>Text:</Form.Label>
                        <Form.Control className='font' type="text" value={editedTitle} onChange={handleTitleChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onRequestClose}>
                    Close
                </Button>
                <MyButton onClick={handleSaveChanges}>
                    Save
                </MyButton>
            </Modal.Footer>
        </Modal>
    );
};

export default EditComment


