import React, { useState } from 'react';
import { Alert, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../UI/MyButton.js/MyButton';
import classes from '../../UI/Peges/Singin.module.css';
const SingIn = () => {
    const [name, setName] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    let navigate = useNavigate();
    const hendalClickLogin = (e) => {
        e.preventDefault();
        if (name === '') {
            setShowAlert(true);
            return;
        } else {
            setShowAlert(false);
        }
        localStorage.setItem("username", name);
        navigate("/main");
    }

    return (
        <>
            <Container className={classes.containerT}>
               <Form>
                    <Form.Group className="mb-3"
                        controlId="formBasicEmail">
                        <Form.Label className={classes.wellcom}>
                            <h3>Sign In</h3>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter user name"
                            autoComplete="username"
                            value={name}
                            onChange={e => setName(e.target.value.trim())} />
                        <Row className='m-0 p-0'>
                            <MyButton
                                onClick={hendalClickLogin}>
                                LogIn
                            </MyButton>
                            {showAlert && (
                                <Row className='m-0 p-0'>
                                    <Alert key='danger' variant='danger' className="mt-3">
                                        Please enter user name
                                    </Alert>
                                </Row>
                            )}

                        </Row>

                    </Form.Group>
                </Form>

            </Container>
        </>
    );
}

export default SingIn