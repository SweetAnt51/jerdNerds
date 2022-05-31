import { Switch } from '@mui/material';
import PropTypes from 'prop-types';
// import PopUpMenu from './PopUpMenu';

function Header(props) {
    
    const classes = {
        header: {   
                    padding:'15px',
                    width:'100%',
                    margin: 'auto',
                    height: '22px',
                    display:'flex',
                    backgroundColor: props.mode === 'dark' ? '#1A2027' : '#c7c7c7',
                    color : props.mode === 'dark' ? 'white' : 'black'
        },

        title: {
                    marginTop: '30px',
                    marginLeft: '15px',
                    fontSize: '28px',
                    width:'100%',
                    alignItems: 'flex-end',
                    justifyContent:'flex-start',
                    flexDirection:'row',
                    display:'flex'
        },

        linkContainer: {
                    display:'flex', 
                    width:'100%', 
                    marginRight:'30px', 
                    justifyContent:'flex-end',
                    alignItems:'center',
        },

        link : {
                    marginLeft:'20px', 
                    cursor:'pointer'
        },

        switch : {
            marginLeft:'20px', 
            marginTop:'4px',
            cursor:'pointer'
        }
        
    }

    const handleThemeChange = () => {
        props.mode === 'dark' ? props.setThemeMode('light') : props.setThemeMode('dark'); 
    }

    return( 
        <header style={classes.header}>

            {/* <PopUpMenu setMode={props.setMode} isLoggedIn={props.isLoggedIn} role={props.role} handleApplyClick={handleApplyClick}/>  */}
            
            <h1 style={classes.title}> 
                {props.text}
            </h1>
            
            <div style={classes.linkContainer}>                
                <div style={classes.switch}>
                    {props.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    <Switch onClick={() => handleThemeChange()}/>
                </div>
                {!props.isLoggedIn ?
                    <span style={classes.link} onClick={() => props.setMode('register')}>Sign Up</span>
                : null
                }
                
                
                
                <span role='log' style={classes.link} >
                        {props.isLoggedIn ?
                            "Log Out"
                        :
                            "Login"
                        }
                </span>
                {props.isLoggedIn && props.role === 'applicant' ? 
                    <span style={classes.link}>Apply Today</span>
                :
                    null
                }
            </div>
        </header>);    
}

Header.propTypes = {
    text: PropTypes.string
};

Header.defaultProps = {
    text : 'Insert Header Text Here'
};

export default Header;