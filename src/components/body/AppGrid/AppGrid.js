import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { apps } from '../../../appData/Applications';


export default function ApplicationGrid(props) {
    
    const renderApps = () => {
        return apps.filter(app => {
                if (props.filter === ''){
                    return app
                }else if (app.name.toLowerCase().includes(props.appFilter.toLowerCase())){
                    return app
                }else{
                    return null
                }
                
            }).map( (app, index) => {
            return(
                <Grid item key={index}>
                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            width: 350,
                            height:300,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#f2f3f5',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item sx={{width:'100%', height:'300px'}}>
                                <div style={{display:'flex'}}>
                                    <Tooltip title={app.info}>
                                        <InfoRoundedIcon />
                                    </Tooltip>
                                </div>
                                <div style={{width:'100%', fontWeight:'bolder', fontSize:28, textAlign:'center'}}>
                                    <p style={{margin:0}}>{app.name}</p>
                                </div>

                                <div style={{height:'150px', display:'flex', justifyContent:'center', alignItems:'center', marginTop:35}}>
                                    {/* <MenuIcon /> */}
                                    {app.png === true ? 
                                        <img src = {app.img} height={200} color={'white'}/>
                                        :
                                        <app.img fill={props.theme === 'dark' ? 'white' : 'black'} height={200}/>
                                    }
                                    
                                </div>

                                
                                <div style={{display:'flex', marginTop:20, justifyContent:'right'}}>
                                    { app.accountRequired ? 
                                        <Button variant="contained" sx={{marginRight:1}} onClick={app.onClick}>Get Access</Button>
                                        :
                                        null
                                    }
                                    <Button variant="contained" onClick={app.onClick}>Launch</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            )
        })
    }
    
    return (
        <Grid container spacing={2} sx={{justifyContent:'center', marginTop:'20px', width:'100%', height:'100%'}}>
            {renderApps()}
        </Grid>
  );
}
