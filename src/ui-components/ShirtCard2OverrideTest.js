import React from 'react';
import ShirtCard2 from './ShirtCard2'; // Import the original ShirtCard2 component

// Create a custom version of ShirtCard2 with overrides
function CustomShirtCard2(props) {
  // Define custom styles
  const customStyles = {
    border: '2px solid red', // Adding a red border
    padding: '10px', // Adding padding for spacing
  };

  // Add your custom logic here
  return (
    <div style={customStyles}>
      <ShirtCard2 {...props} /> {/* Render the original ShirtCard2 component */}
      {/* Add your custom content or modifications here */}
      <p>This is a custom message added to the component.</p>
    </div>
  );
}

export default CustomShirtCard2; // Export your custom component
