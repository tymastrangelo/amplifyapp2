import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API, Storage } from 'aws-amplify';
import { createShirt } from '../graphql/mutations'; // Adjust the path as necessary
import { Flex, Button, TextField } from '@aws-amplify/ui-react';

const CreateShirtComponent = () => {
    const navigate = useNavigate();
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState(null);

    const handleCreateShirt = async () => {
        if (image) {
            try {
                // Upload image to S3 and get the stored key
                const imageKey = await uploadImage(image);

                const shirtData = {
                    Type: type,
                    Brand: brand,
                    Size: size,
                    Image: imageKey,
                };

                await API.graphql({
                    query: createShirt,
                    variables: { input: shirtData },
                });

                // Navigate or perform any action after success
                navigate('/');
            } catch (error) {
                console.error('Error creating shirt:', error);
            }
        }
    };

    const uploadImage = async (file) => {
        const filename = `${Date.now()}-${file.name}`;
        const stored = await Storage.put(filename, file, {
            contentType: file.type,
        });
        return stored.key;
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
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

    const fileInputStyle = {
        width: '100%',
        margin: '10px 0',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box' // Ensures padding doesn't increase size
    };

    return (
        <Flex style={flexContainerStyle}>
            <TextField
                label="Type"
                placeholder="T-Shirt, Longsleeve, etc."
                onChange={(e) => setType(e.target.value)}
                value={type}
            />
            <TextField
                label="Brand"
                placeholder="Nike, Adidas, etc."
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
            />
            <TextField
                label="Size"
                placeholder="XS, S, M, L, XL"
                onChange={(e) => setSize(e.target.value)}
                value={size}
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={fileInputStyle}
            />
            <Button onClick={handleCreateShirt}>Create Shirt</Button>
        </Flex>
    );
};

export default CreateShirtComponent;
