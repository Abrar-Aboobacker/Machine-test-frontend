import { Box } from '@mui/material';
import React from 'react';

const Circle = () => {
  return (
    <>
      <Box
        sx={{
          height: "100px",
          width: "100px",
          backgroundColor: "#00FF66",
          borderRadius: "50%",
        //   filter: "blur(5px)", // Add the blur effect here
        }}
      ></Box>
    </>
  );
};

export default Circle;
