import React, { useEffect, useState } from 'react';
import { API, Storage } from 'aws-amplify';
import ShirtCard2Collection from './ShirtCard2Collection'; // Import the original ShirtCard2Collection component

// Create a custom version of ShirtCard2Collection with overrides
function CustomShirtCard2Collection(props) {
  const { shirts, ...rest } = props;

  // Define custom logic to fetch and display images
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const urls = [];
      for (const shirt of shirts) {
        if (shirt.Image) {
          try {
            const imageUrl = await Storage.get(shirt.Image); // Assuming "Image" holds the image ID
            urls.push(imageUrl);
          } catch (error) {
            console.error(`Error fetching image for shirt ID ${shirt.id}:`, error);
          }
        }
      }
      setImageUrls(urls);
    }

    fetchImages();
  }, [shirts]);

  // Add your custom logic here
  return (
    <ShirtCard2Collection {...rest}>
      {shirts.map((shirt, index) => (
        <div key={shirt.id}>
          {/* Display the image */}
          {imageUrls[index] && (
            <img src={imageUrls[index]} alt={`Shirt ${index + 1}`} style={{ maxWidth: '100%' }} />
          )}
          <p>This is a custom message added to the component.</p>
          {/* Add other shirt details here */}
          <p>Brand: {shirt.Brand}</p>
          <p>Type: {shirt.Type}</p>
          <p>Size: {shirt.Size}</p>
        </div>
      ))}
    </ShirtCard2Collection>
  );
}

export default CustomShirtCard2Collection; // Export your custom component
