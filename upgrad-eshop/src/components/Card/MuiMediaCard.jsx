import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MuiMediaCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: "1em" }} href="/products">
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/200"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Random Pic
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A cascade of fireflies danced in the moonlit forest, their delicate
          glow creating a mesmerizing spectacle. The rustling leaves whispered
          secrets to the night, while a distant owl hooted its lonely melody.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          BUY
        </Button>
        <EditIcon sx={{ justifyContent: "end" }} />
        <DeleteIcon />
      </CardActions>
    </Card>
  );
}
