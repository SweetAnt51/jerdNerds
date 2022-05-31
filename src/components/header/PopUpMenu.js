import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '../../images/menu.png';


function PopUpMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  

  return (
    <div>
      <img alt='Menu Icon' onClick={handleClick} style={{   left:'15px',
                                                            top:'8px',
                                                            cursor:'pointer'}}
                                                            src={MenuIcon} 
                                                            height='25' 
                                                            width='25' />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      
      {props.isLoggedIn ?
          
          props.role === 'applicant' ?
            <div>
              <MenuItem onClick = {() => props.setMode('profile')}>Profile</MenuItem>
              <MenuItem onClick = {() => props.handleApplyClick()}>New Application</MenuItem>              
              <MenuItem onClick = {() => props.setMode('changePassword')}>Change Password</MenuItem>
            </div>
          :
          props.role === 'faculty' || props.role === 'chair' ?
            <div>
              <MenuItem onClick = {() => props.setMode('profile')}>Profile</MenuItem>
              <MenuItem onClick = {() => props.setMode('review')}>Review Applications</MenuItem>
              <MenuItem onClick = {() => props.setMode('changePassword')}>Change Password</MenuItem>
            </div>
        :
        null

      :
        <div>
          <MenuItem onClick = {() => props.setMode('register')}>Sign Up</MenuItem>
        </div>
      }
      
      
      
      </Menu>
    </div>
  );
}

export default PopUpMenu;