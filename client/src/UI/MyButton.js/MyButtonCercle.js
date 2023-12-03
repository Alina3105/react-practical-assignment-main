import React from 'react';
import { Button } from 'react-bootstrap';

const MyButtonCercle= ({ children, ...props }) => {
    return (
        <Button {...props}  className="rounded-circle">
            {children}
        </Button>
    );
};

export default MyButtonCercle;