import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from './Header';
import RenderPaginationItems from './RenderPaginationItems';
import AddPost from './addPost/AddPost';
import Posts from './post/Posts';
const ITEMS_PER_PAGE = 3;

const HomePage = () => {

    const data = useSelector(state => state.posts.result);
    const reversedData = [...data].reverse();

    /* hendl pagination */
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentData = reversedData.slice(startIndex, endIndex);


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className='box'>
            <Header />
            <Row className='m-0 p-0'>
                <Col className='mt-3' xs={1}>
                    <AddPost />
                </Col>
            </Row>
            <div className='containerTw p-0 m-0'>
                {currentData.map((item) => (
                    <div
                        key={item.id}>
                        <Posts
                            item={item} /></div>
                ))}
            </div>
            <div className='container'>
            <RenderPaginationItems 
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
            </div>
        </div>
    )
}

export default HomePage;








