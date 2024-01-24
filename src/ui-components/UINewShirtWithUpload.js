import React, { useState } from 'react';
import { Storage } from 'aws-amplify';
import UINewShirt from './UINewShirt'; // Adjust this path to where your UINewShirt component is located

export default function UINewShirtWithUpload(props) {
    const [imageKey, setImageKey] = useState('');

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const uploadResult = await Storage.put(file.name, file, {
                    contentType: file.type,
                });
                setImageKey(uploadResult.key); // Save the key of the uploaded image
            } catch (error) {
                console.error('Error uploading the file:', error);
            }
        }
    };

    // Replace 'YourImageFieldKey' with the actual key for the image field in `UINewShirt`
    const imageOverrides = {
        ...props.overrides,
        "textFieldThreeEightFiveOneOneSixSixZeroValue": {
            value: imageKey,
            readOnly: true, // Optional: make the field read-only if it exists
        },
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {imageKey && (
                <img 
                    src={`https://bucket1153135-staging.s3.us-east-1.amazonaws.com/public/${imageKey}`} 
                    alt="Uploaded Shirt" 
                />
            )}
            <UINewShirt {...props} overrides={imageOverrides} />
        </div>
    );
}
