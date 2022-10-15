import { useState } from "react";
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Radio,
} from "@mui/material";
import styled, { keyframes } from "styled-components";

const Activities = ({ locat, setChanged }) => {
  const [activities, setActivities] = useState([
    "A2",
    "A3",
    "A4",
    "A6",
    "A7",
    "A8",
    "A9",
    "A1",
  ]);
  return (
    <AbsoluteDiv>
      <Typography variant="h4" sx={{ fontWeight: "light" }}>
        List of Activities in <StyledSpan> {locat}</StyledSpan>{" "}
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          sx={{ fontWeight: "thin" }}
          name="radio-buttons-group"
        >
          {activities.map((element) => {
            return (
              <FormControlLabel
                value={element}
                key={element}
                control={<Radio />}
                label={element}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </AbsoluteDiv>
  );
};

const fadeIn = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

const StyledSpan = styled.span`
  color: transparent;
  -webkit-text-stroke: 1px #3f51b5;
`;

const AbsoluteDiv = styled.div`
  position: absolute;
  top: 200px;
  animation: ${fadeIn} 2s;
`;

export default Activities;
