import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import EditModale from './EditModale';
import { useDispatch } from 'react-redux';
import { deleteComent, deletePost } from '../../../features/async/asyncActionPosts';
import EditComment from '../comment/EditComment';

const DeletOrEdit = ({ item, theEdit }) => {

  const [trueOrFalse, setTrueOrFalse] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [initialPhoto, setInitialPhoto] = useState(item.imageSrc);
  const dispatch = useDispatch()
  const hendleClickDelete = () => {
    if (theEdit === 'post') {
      dispatch(deletePost(item.id));
    }
    if (theEdit === 'com') {
      dispatch(deleteComent(item.id));
    }
    setTrueOrFalse(!trueOrFalse);
  };

  const hendlEdit = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setInitialPhoto(initialPhoto);
    setModalIsOpen(false);
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <BsThreeDotsVertical />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="" className='filter' onClick={hendlEdit}>Edit</Dropdown.Item>
          <Dropdown.Item href="" className='filter' onClick={hendleClickDelete}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {theEdit === "post" ? <EditModale
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        item={item}
        initialPhotoProp={initialPhoto}
      /> : <EditComment isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        item={item} />}
    </div>
  );
};

export default DeletOrEdit;
