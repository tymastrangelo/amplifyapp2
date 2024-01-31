// MyCustomUploader.jsx
import React, { useState } from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { createShirt } from '../graphql/mutations'; // Adjust the import path

const MyCustomUploader = () => {
    const [file, setFile] = useState(null);
    const [shirtInfo, setShirtInfo] = useState({ type: '', brand: '', size: '' });

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleInputChange = (event) => {
        setShirtInfo({ ...shirtInfo, [event.target.name]: event.target.value });
    };

    const uploadImage = async () => {
        if (!file) {
            console.error('No file selected');
            return;
        }

        const key = `images/${Date.now()}-${file.name}`;
        try {
            await Storage.put(key, file, {
                contentType: file.type,
                level: 'private', // ensures file is uploaded to private folder
            });
            return key;
        } catch (err) {
            console.error('Error uploading file:', err);
            return null;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const imageKey = await uploadImage();
        if (imageKey) {
            const shirtData = {
                ...shirtInfo,
                image: imageKey,
            };
            try {
                await API.graphql(graphqlOperation(createShirt, { input: shirtData }));
                console.log('Shirt created successfully');
                // Additional success handling
            } catch (err) {
                console.error('Error creating shirt:', err);
                // Additional error handling
            }
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <input
                type="text"
                name="type"
                placeholder="Type"
                value={shirtInfo.type}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={shirtInfo.brand}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="size"
                placeholder="Size"
                value={shirtInfo.size}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Upload Shirt</button>
        </div>
    );
};

export default MyCustomUploader;
