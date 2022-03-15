import * as React from "react";
import { ICharacter } from "./character.interfaces";
import {
  Accordion,
  Avatar,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Grid,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { IEpisode } from "./episode.interfaces";
import { EpisodeService } from "services/episode.service";
const episodeService = new EpisodeService();

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
  const [open, setOpen] = React.useState<boolean>(false);
  const [episodes, setEpisodes] = React.useState<IEpisode[]>([]);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (character?.id) {
      const getData = async () => {
        let episodeList = character.episode
          .map((e) => e.split("/").pop())
          .join(",");
        const { data } = await episodeService.get(episodeList);
        setEpisodes(data);
      };
      getData();
      setOpen(true);
    }
  }, [character]);

  return (
    <Dialog fullWidth maxWidth={"md"} open={open} onClose={handleClose}>
      <DialogTitle>Character detail</DialogTitle>
      <DialogContent>
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
            {episodes.map((i) => (
              <Typography>{i.name}</Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};
