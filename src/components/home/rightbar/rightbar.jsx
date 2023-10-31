import {
    Avatar,
    AvatarGroup,
    Box,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { userData } from "./userData";
  
  const Rightbar = () => {
    return (
      <Box flex={2} p={2} sx={{ marginLeft: "1100px", display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={7}>
            {userData.friends && userData.friends.map((friend, index) => (
              <Avatar
                key={index}
                alt={friend.name}
                src={friend.avatar}
              />
            ))}
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            {userData.photos && userData.photos.map((photo, index) => (
              <ImageListItem key={index}>
                <img
                  src={photo}
                  alt=""
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Conversations
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {userData.conversations && userData.conversations.map((conversation, index) => (
              <ListItem alignItems="flex-start" key={index}>
                <ListItemAvatar>
                  <Avatar alt={conversation.avatarAlt} src={conversation.avatarSrc} />
                </ListItemAvatar>
                <ListItemText
                  primary={conversation.primaryText}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {conversation.secondaryText}
                      </Typography>
                      {" — " + conversation.tertiaryText}
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    );
  };
  
  export default Rightbar;
  