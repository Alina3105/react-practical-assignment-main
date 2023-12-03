import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import classes from '../../UI/Spiner/Spiner.module.css'
import { getPosts } from '../../features/async/asyncActionPosts'
import HomePage from './HomePage'
const Main = () => {

  const data = useSelector(state => state.posts);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getPosts());
    const savedUsername = localStorage.getItem("username");
    if (!savedUsername) {
      navigate("/logIn");
    }
  }, [navigate]);

  if (!data) {
    return (
      <div className={classes.contsainerSpinner}>
        <Spinner animation="border" variant="info" />
      </div>
    );
  }


  return (
    <div>
      <HomePage />
    </div>
  );
}

export default Main


