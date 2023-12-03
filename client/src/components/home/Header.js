import React, { useState } from 'react';
import { Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { MdClear } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { ImExit } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getPostByFilter, getPosts } from '../../features/async/asyncActionPosts';
import classes from '../../UI/Peges/Header.module.css'

const Header = () => {
    const user = localStorage.getItem("username");
    let navigate = useNavigate();
    const [value, setValue] = useState('');
    const hendalClickLogOut = (e) => {
        navigate("/logIn");
    }
    const dispatch = useDispatch();

    const hendleSendFilter = () => {
        dispatch(getPostByFilter(value));
        setValue('');

    }
    const hendleClose = () => {
        setValue('');
        dispatch(getPosts());
    }
    return (
        <>
            <Navbar expand="lg" className={`bg-body-tertiary ${classes.navBar}`} >
                <Container fluid>
                    <Navbar.Brand href='/main' className={classes.filter}>Hello, {user}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
                        </Nav>
                        <Nav className="d-flex align-items-center ">
                            <InputGroup style={{ width: "100%" }} >
                                <InputGroup.Text >
                                    <CiSearch onClick={hendleSendFilter} />
                                </InputGroup.Text>
                                <FormControl
                                    className='filter'
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    style={{ borderLeft: 'none' }} />

                                <InputGroup.Text className={classes.clear_icon} >
                                    <MdClear className={classes.clear_icon}
                                        onClick={hendleClose} />
                                </InputGroup.Text>
                            </InputGroup>
                            <Nav.Item>
                                <Nav.Link href="#"><ImExit onClick={hendalClickLogOut} size={20} /></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}


export default Header