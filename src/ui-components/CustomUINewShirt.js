import React, { useState } from 'react';
import { Storage } from 'aws-amplify';
import UINewShirt from './UINewShirt'; // Adjust the path to your UINewShirt component

const UINewShirtOverride = (props) => {
    const [imageKey, setImageKey] = useState('');

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const uploadResult = await Storage.put(file.name, file, {
                    contentType: file.type,
                });
                setImageKey(uploadResult.key);
            } catch (error) {
                console.error('Error uploading the file:', error);
            }
        }
    };

    // Additional props or state logic as needed

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <UINewShirt {...props} imageKey={imageKey} />
        </div>
    );
};

export default UINewShirtOverride;
