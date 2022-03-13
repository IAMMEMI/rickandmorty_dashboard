import * as React from "react";
import { ICharacter } from "./character.interfaces";
import {
  Accordion,
  Avatar,
  AccordionSummary,
  AccordionDetails,
  Box,
  Modal,
  Typography,
  Grid,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ICharacterModalProps {
  character: ICharacter;
}

const renderRow = (label: string, value: string) => (
  <Typography>
    <span style={{ fontWeight: "600" }}>{`${label}: `}</span>
    {value}
  </Typography>
);

export const CharacterModal: React.FC<ICharacterModalProps> = ({
  character,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (character?.id) setOpen(true);
  }, [character]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Grid container sx={{ marginBottom: "20px" }}>
          <Grid item>
            <Avatar src={character.image} sx={{ margin: "0 20px 0 0" }} />
          </Grid>
          <Grid item>
            {renderRow("Name", character.name)}
            {renderRow("Status", character.status)}
            {renderRow("Species", character.species)}
            {renderRow("Gender", character.gender)}
          </Grid>
        </Grid>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>Episodes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>Pilot</li> 
              <li>Pilot2</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Modal>
  );
};
