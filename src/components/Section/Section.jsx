import { InsertEmoticon } from "@mui/icons-material";
import { ListItem } from "@mui/material";
import React from "react";
import Members from "../Members/Members";

import { Box, Container } from "./SectionStyle";

const Section = ({ users }) => {
  return (
    <Box>
      <h1 style={{ color: "purple", textAlign: "center" }}>
        Meet Our Premium Members
      </h1>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            marginTop: "30px",
            fontSize: "15px",
          }}>
          <Members users={users} />
        </div>
      </Container>
    </Box>
  );
};

export default Section;
