import React from "react";
import { Card, CardContent, Box, CardHeader } from "@mui/material";

const CardComponent = ({ val, ind }) => {
  return (
    <>
      {val && Object.keys(val).length > 0 ? (
        <Card style={{ margin: 5 }} key={ind}>
          <CardContent>
            <Box>
              <h3>{val.title}</h3>
            </Box>
            <Box>{val.body}</Box>
          </CardContent>
        </Card>
      ) : (
        <Card style={{ margin: 5 }}>
          <CardHeader>
            <Box>
              <h3></h3>
            </Box>
            <Box></Box>
          </CardHeader>
        </Card>
      )}
    </>
  );
};

export default CardComponent;
