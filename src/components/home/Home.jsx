import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Badge,
  Button,
  InputBase,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import CardComponent from "./card/Card";
import Computer from "@mui/icons-material/Computer";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import HeartIcon from "@mui/icons-material/VolunteerActivism";

const Home = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pages = ["Page 1", "Page 2", "Page 3"];

  const settings = ["Profile", "My account", "Logout"];

  const topJobs = [
    { title: "Frontend developer", country: "United States", company: "Meta" },
    { title: "Software Engineer", country: "Canada", company: "Sage" },
    { title: "Backend developer", country: "Japan", company: "Nozomi" },
    { title: "React developer", country: "Argentina", company: "Softtek" },
    { title: "Fullstack developer", country: "Germany", company: "Hanko" },
    { title: "Junior Developer", country: "Switzerland", company: "Google" },
  ];

  const options = topJobs.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <AppBar position="sticky" >
      <Container maxWidth="xl" >
          <Toolbar disableGutters>
          <Computer
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography variant="h5" noWrap sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="span"
              sx={{
                mr: 2,
                fontFamily: "Raleway, Arial",
              }}
            >
              SheTechHub
            </Typography>
          </Typography>
          <Stack spacing={2} sx={{ width: 300, marginRight: 100 }}>
            <Autocomplete
              options={options.sort((a, b) =>
                -b.firstLetter.localeCompare(a.firstLetter)
              )}
              getOptionLabel={(option) =>
                option.title || option.company || option.country
              }
              renderInput={(params) => (
                <TextField {...params} label="Search" />
              )}
            />
           </Stack>
          <Box sx={{ ml: "auto" }} >
            <IconButton>
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{ p: 2 }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://media.licdn.com/dms/image/D4D03AQHPcVCFfe3NHw/profile-displayphoto-shrink_800_800/0/1696000581279?e=1704326400&v=beta&t=uZcs4d4BITnfL1tMfD2qcNofr2rKPJW_dTOzIzk_p_U"
            />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            {page}
          </MenuItem>
        ))}
      </Menu>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        sx={{ mt: "45px" }}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            {setting}
          </MenuItem>
        ))}
         
      </Menu>
      </AppBar>
  );
};

export default Home;
