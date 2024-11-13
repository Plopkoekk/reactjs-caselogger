import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Divider } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  // State for managing the open/close of the menus
  const [anchorElInHome, setAnchorElInHome] = useState(null);
  const [anchorElFTTH, setAnchorElFTTH] = useState(null);
  const [anchorElB2B, setAnchorElB2B] = useState(null);
  const [anchorElB2BProjects, setAnchorElB2BProjects] = useState(null);
  const [anchorElOtherStuff, setAnchorElOtherStuff] = useState(null);

  // Handlers to open/close menus
  const handleOpenInHome = (event) => setAnchorElInHome(event.currentTarget);
  const handleCloseInHome = () => setAnchorElInHome(null);

  const handleOpenFTTH = (event) => setAnchorElFTTH(event.currentTarget);
  const handleCloseFTTH = () => setAnchorElFTTH(null);

  const handleOpenB2B = (event) => setAnchorElB2B(event.currentTarget);
  const handleCloseB2B = () => setAnchorElB2B(null);

  const handleOpenB2BProjects = (event) => setAnchorElB2BProjects(event.currentTarget);
  const handleCloseB2BProjects = () => setAnchorElB2BProjects(null);

  const handleOpenOtherStuff = (event) => setAnchorElOtherStuff(event.currentTarget);
  const handleCloseOtherStuff = () => setAnchorElOtherStuff(null);

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Make "Caselogger" a clickable link */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Caselogger
          </Link>
        </Typography>

        {/* inHome Menu */}
        <Button color="inherit" onClick={handleOpenInHome}>inHome</Button>
        <Menu
          anchorEl={anchorElInHome}
          open={Boolean(anchorElInHome)}
          onClose={handleCloseInHome}
        >
          <MenuItem component={Link} to="inhome/install">Install</MenuItem>
          <MenuItem component={Link} to="inhome/repair">Repair</MenuItem>
          <Divider />
          <MenuItem component={Link} to="inhome/project/unhappy">Project Unhappy Drop</MenuItem>
        </Menu>

        {/* FTTH Menu */}
        <Button color="inherit" onClick={handleOpenFTTH}>FTTH</Button>
        <Menu
          anchorEl={anchorElFTTH}
          open={Boolean(anchorElFTTH)}
          onClose={handleCloseFTTH}
        >
          <MenuItem component={Link} to="ftth/rfog/install">RFoG Install</MenuItem>
        </Menu>

        {/* B2B Menu */}
        <Button color="inherit" onClick={handleOpenB2B}>B2B</Button>
        <Menu
          anchorEl={anchorElB2B}
          open={Boolean(anchorElB2B)}
          onClose={handleCloseB2B}
        >
          <MenuItem component={Link} to="b2b/cfn">CFN</MenuItem>
          <MenuItem component={Link} to="b2b/psvka">PSV KA</MenuItem>
        </Menu>

        {/* B2B Projects Menu */}
        <Button color="inherit" onClick={handleOpenB2BProjects}>B2B Projects</Button>
        <Menu
          anchorEl={anchorElB2BProjects}
          open={Boolean(anchorElB2BProjects)}
          onClose={handleCloseB2BProjects}
        >
          <MenuItem component={Link} to="b2b/project/gsx">GSX Migration</MenuItem>
        </Menu>

        {/* Other Stuff Menu */}
        <Button color="inherit" onClick={handleOpenOtherStuff}>Other Stuff</Button>
        <Menu
          anchorEl={anchorElOtherStuff}
          open={Boolean(anchorElOtherStuff)}
          onClose={handleCloseOtherStuff}
        >
          <MenuItem>Other Tools</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
