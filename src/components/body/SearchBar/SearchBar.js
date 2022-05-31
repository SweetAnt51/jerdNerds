import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(props) {
  
    const handleSearchChange = (value) => {
        props.setAppFilter(value);
    }
    return (
    <div style={{display:'flex', justifyContent:'center', marginTop:'40px', width:'100%', textAlign:'center'}} >
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
        {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MenuIcon />
        </IconButton> */}
            <InputBase
                sx={{ ml: 1, flex: 1}}
                placeholder="Search Available Apps"
                inputProps={{ 'aria-label': 'search available apps' }}
                value={props.appFilter}
                onChange={(e) => handleSearchChange(e.target.value)}
            />
            <SearchIcon />
        </Paper>
    </div>
  );
}
