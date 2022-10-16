import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import jsonData from "../data/activities_items.json";

export default function NestedList({ activity }) {
  const [open, setOpen] = React.useState(false);
  const [openId, setOpenId] = React.useState(null);
  const stuff = jsonData[activity];
  console.log(stuff);

  const majorThings = Object.keys(stuff);

  const handleClick = (e) => {
    setOpen(!open);
    console.log(e);
    setOpenId(e.target.innerHTML);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {majorThings.map((thing) => (
        <>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary={thing} />
            {open && openId == thing ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open && openId == thing} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {stuff[thing].map((anotherthing) => (
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={anotherthing} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </>
      ))}
    </List>
  );
}
