import styled from "styled-components";
import { TextField, Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import Autocomp from "./Autocomp";
import gsap from "gsap";
import { useRef } from "react";
import TextAnimation from "./TextAnimation";
import Activities from "./Activities";
import jsonData from "../data/cities_activities_spots.json";
import Spots from "./Spots";
import TPP from "./TTP";

const Location = ({ locat, setLocat }) => {
  const cities = Object.keys(jsonData);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [changed, setChanged] = useState(0);
  const [activity, setActivity] = useState("");
  const [finSpot, setFinSpot] = useState("");
  const textRef = useRef(null);

  useEffect(() => {
    if (!changed & (locat != null) & (locat != "")) {
      setChanged(1);
    }
  }, [locat]);

  useEffect(() => {
    if (changed == 1)
      gsap.fromTo(
        inputRef.current,
        1.3,
        { y: 0 },
        { y: -350, x: 150, ease: "expo.easeInOut" }
      );
    gsap.fromTo(
      textRef.current,
      1.3,
      { opacity: 1 },
      { opacity: 0, ease: "easeIn" }
    );
  }, [changed]);

  return (
    <>
      {changed == 0 && <TextAnimation ref={textRef} />}

      {changed == 1 && (
        <Activities
          setChanged={setChanged}
          locat={locat}
          activity={activity}
          setActivity={setActivity}
        />
      )}

      {changed == 2 && (
        <Spots setChanged={setChanged} locat={locat} activity={activity} setFinSpot={setFinSpot} />
      )}
      {changed == 3 && (
        <TPP activity={activity} />
      )}

      <div ref={inputRef} className="autocomp">
        <Autocomp
          inputValue={inputValue}
          setInputValue={setInputValue}
          cities={cities}
          locat={locat}
          setLocat={setLocat}
        />
      </div>
    </>
  );
};

export default Location;
