import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cartas({
  title,
  poster,
  genres,
  rating,
  synopsis,
  year,
  country,
  duration,
  director,
  id,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{  padding:0,maxWidth: 300, backgroundColor: "#212121" }}>
        <CardMedia
          component="img"
          height="400"
          image={poster}
          alt="img not found"
        />
        <CardContent>
          {/* Estrellitas favoritos */}
          <Link variant="button" underline="none" to={`/detail/${id}`}>
            <Typography variant="h6" style={{ color: "#f1c232" }}>
              {title}
            </Typography>{" "}
          </Link>
          <Typography variant="h6" style={{ color: "#f1c232" }}>
            {year}
          </Typography>
          {/* <Rating
            name="half-rating-read"
            precision={0.5}
            sx={{
              "& .MuiRating-iconFilled": { color: "#f1c232" },
            }}
            value={rating}
            readOnly
          /> */}
          {/* Estrellitas favoritos */}
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onMouseOver={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6" style={{ color: "#f1c232" }}>
              Dirección: {director}{" "}
            </Typography>
            <Typography variant="h6" style={{ color: "#f1c232" }}>
              {genres}{" "}
            </Typography>
            <Typography variant="h6" style={{ color: "#f1c232" }}>
              {" "}
              País:
              {country}
            </Typography>
            <Typography variant="h6" style={{ color: "#f1c232" }}>
              Duración: {duration}{" "}
            </Typography>
            <Typography paragraph>Sinopsis: {synopsis}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}