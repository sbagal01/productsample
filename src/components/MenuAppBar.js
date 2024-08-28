import * as React from 'react';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import {Button} from '@mui/material';
  import IconButton from '@mui/material/IconButton';
  import MenuIcon from '@mui/icons-material/Menu';
  import AccountCircle from '@mui/icons-material/AccountCircle';
  import {NavLink} from 'react-router-dom'
  import Switch from '@mui/material/Switch';
  import FormControlLabel from '@mui/material/FormControlLabel';
  import FormGroup from '@mui/material/FormGroup';
  import MenuItem from '@mui/material/MenuItem';
  import Menu from '@mui/material/Menu';
  import {useSelector} from 'react-redux';
  import {CartState} from '../store/CartSlice';
  export default function MenuAppBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const cartProduct=useSelector(CartState);

    return (
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? 'Log Out' : 'Log In'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
              <Typography sx={{flexGrow:1}}>
                <Button sx={{m:1}} variant="contained">
                <NavLink to="/">Products</NavLink>
                </Button>
                <Button sx={{m:1}} variant="contained">
                  <NavLink to="/cart">Cart</NavLink>
                </Button>

              </Typography>
              
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <p>{cartProduct.length}</p>
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            
          </Toolbar>
        </AppBar>
      </Box>
    );
  }



