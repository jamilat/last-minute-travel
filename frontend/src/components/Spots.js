import { useState } from "react";
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Radio,
  Button,
} from "@mui/material";
import styled, { keyframes } from "styled-components";
import jsonData from "../data/cities_activities_spots.json";

const Spots = ({ locat, setChanged, setActivity, activity, setFinSpot }) => {
  const [spots, setSpots] = useState(jsonData[locat][activity]);
  const [radioInput, setRadioInput] = useState(null);
  return (
    <AbsoluteDiv>
      <Typography variant="h4" sx={{ fontWeight: "light" }}>
        List of Spots for <StyledSpan> {activity} </StyledSpan> in{" "}
        <StyledSpan> {locat}</StyledSpan>{" "}
      </Typography>
      <RadioDiv>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            sx={{ fontWeight: "thin" }}
            name="radio-buttons-group"
          >
            {spots.map((element) => {
              return (
                <FormControlLabel
                  value={element}
                  key={element}
                  onClick={(e) => {
                    setRadioInput(e.target.value);
                  }}
                  control={<Radio />}
                  label={element}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </RadioDiv>
      <TextDiv>
        <Button
          variant="outlined"
          onClick={() => {
            setFinSpot(radioInput);
            setChanged(3);
          }}
          sx={{ textTransform: "capitalize", marginTop: "50px" }}
        >
          Tell me what to pack
        </Button>
      </TextDiv>
    </AbsoluteDiv>
  );
};

const RadioDiv = styled.div`
  margin-top: 30px;
`;

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

const TextDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Spots;
