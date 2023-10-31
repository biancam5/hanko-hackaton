import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { cardData } from "./data";  
const CardComponent = () => {
  return (
    <>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ margin: 2 , maxWidth: 600, marginLeft: 50 ,boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.4)"}}>
          <CardHeader
            avatar={<Avatar src={card.avatarImg}> 
              {card.avatarText}
            </Avatar>}
            action={<IconButton aria-label="settings">
              <MoreVert />
            </IconButton>}
            title={card.title}
            subheader={card.subheader}
          />
            {card.imageUrl && (
            <CardMedia
                component="img"
                height="50%"
                image={card.imageUrl}
                alt="Seoul view"
            />
            )}
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              {card.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default CardComponent;
