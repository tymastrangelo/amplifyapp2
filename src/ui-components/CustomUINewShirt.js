import React from 'react';
import UINewShirt from './UINewShirt'; // Import the original UINewShirt component

// Create a custom version of UINewShirt with a red border override
function CustomUINewShirt(props) {
  // Define custom styles
  const customStyles = {
    border: '2px solid red', // Adding a red border
  };

  // Add your custom logic here
  return (
    <UINewShirt {...props} style={customStyles}>
      {/* Rest of your custom content or modifications here */}
    </UINewShirt>
  );
}

export default CustomUINewShirt; // Export your custom component
