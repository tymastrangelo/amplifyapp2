import React, { useState } from 'react';
import { Storage, API } from 'aws-amplify';
import { createShirt } from '../graphql/mutations'; // Adjust the path as needed
import NewShirtWithImage from './NewShirtWithImage'; // Adjust the import path as needed

const NewShirtWithImageUpload = (props) => {
    const [image, setImage] = useState(null);
    const [shirtData, setShirtData] = useState({ type: '', brand: '', size: '' });

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const imageKey = `images/${Date.now()}-${file.name}`;
            try {
                await Storage.put(imageKey, file, { contentType: file.type });
                // Update shirtData with the image key
                setShirtData({ ...shirtData, image: imageKey });
            } catch (err) {
                console.error('Error uploading file:', err);
            }
        }
    };

    const handleSubmit = async () => {
        try {
            await API.graphql({
                query: createShirt,
                variables: { input: shirtData }
            });
            // Handle successful shirt creation
        } catch (err) {
            console.error('Error creating shirt:', err);
        }
    };

    // Update state when other fields change
    const handleInputChange = (name) => (event) => {
        setShirtData({ ...shirtData, [name]: event.target.value });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <NewShirtWithImage
                {...props}
                type={shirtData.type}
                brand={shirtData.brand}
                size={shirtData.size}
                image={shirtData.image}
                onTypeChange={handleInputChange('type')}
                onBrandChange={handleInputChange('brand')}
                onSizeChange={handleInputChange('size')}
                onAddButtonClick={handleSubmit}
            />
        </div>
    );
};

export default NewShirtWithImageUpload;
