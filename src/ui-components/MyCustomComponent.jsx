import React, { useState, useEffect } from 'react';
import { Storage, Auth, API } from 'aws-amplify';
import { createShirt } from '../graphql/mutations'; // Adjust the path as necessary
import { Button, TextField, Flex } from '@aws-amplify/ui-react';

const MyCustomComponent = () => {
    const [user, setUser] = useState(null);
    const [shirtData, setShirtData] = useState({ type: '', brand: '', size: '' });
    const [file, setFile] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState('');

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(currentUser => setUser(currentUser))
            .catch(err => console.error(err));
    }, []);

    const handleInputChange = (e) => {
        setShirtData({ ...shirtData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setUploadSuccess('');
    };

    const handleUpload = async () => {
        let imageKey = '';
        if (file && user) {
            imageKey = `${user.username}/${Date.now()}-${file.name}`;
            try {
                await Storage.put(imageKey, file, {
                    level: 'private',
                    contentType: file.type
                });
            } catch (error) {
                console.error('Error uploading file:', error);
                return;
            }
        }

        const shirtInput = {
            ...shirtData,
            image: imageKey,
            owner: user.username
        };

        try {
            await API.graphql({ query: createShirt, variables: { input: shirtInput } });
            setUploadSuccess('Shirt uploaded successfully!');
        } catch (error) {
            console.error('Error creating shirt:', error);
        }
    };

    const flexContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        padding: '20px',
    };

    return (
        <Flex style={flexContainerStyle}>
            <TextField
                name="type"
                placeholder="Type (e.g., T-Shirt, Longsleeve)"
                onChange={handleInputChange}
                value={shirtData.type}
            />
            <TextField
                name="brand"
                placeholder="Brand (e.g., Nike, Adidas)"
                onChange={handleInputChange}
                value={shirtData.brand}
            />
            <TextField
                name="size"
                placeholder="Size (e.g., XS, S, M, L, XL)"
                onChange={handleInputChange}
                value={shirtData.size}
            />
            <TextField type="file" onChange={handleFileChange} />
            <Button onClick={handleUpload}>Upload Shirt</Button>
            {uploadSuccess && <p>{uploadSuccess}</p>}
        </Flex>
    );
};

export default MyCustomComponent;
