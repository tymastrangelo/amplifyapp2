import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Button } from '@aws-amplify/ui-react';

const MyCustomComponent = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/'); // Replace '/your-path' with the path you want to navigate to
    };

    return (
        <Flex>
            <Button onClick={handleButtonClick}>Hello</Button>
        </Flex>
    );
};

export default MyCustomComponent;
