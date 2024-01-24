// ShirtCard2Override.jsx
import React from 'react';
import ShirtCard2 from './ShirtCard2'; // Adjust the import path to the actual location of ShirtCard2

// Assuming 'shirt.Image' is the key of the image in the S3 bucket
const s3BucketUrl = "s3://bucket1153135-staging/public/";

const ShirtCard2Override = (props) => {
  // Modify the 'shirt' prop to include the full URL of the image
  const modifiedShirt = {
    ...props.shirt,
    Image: `${s3BucketUrl}${props.shirt.Image}`
  };

  // Spread the modified shirt object into the original ShirtCard2 component
  return <ShirtCard2 {...props} shirt={modifiedShirt} />;
};

export default ShirtCard2Override;
