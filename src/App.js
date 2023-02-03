import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import './App.css';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

function App() {
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState('Black');
  const [boxColor, setBoxColor] = useState('blueviolet');
  const [checkOn, setCheckOn] = useState(false);
  
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 35,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 4,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 15,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  return (
    <div className="App">
      <div className="controls">
        <h2>Horizontal Length</h2>
        <Slider 
          aria-label="Default"
          valueLabelDisplay="auto"
          min={-200}
          max={200}
          value={horizontal}
          onChange={(event) => setHorizontal(event.target.value)}
        />
        <h2>Vertical Length</h2>
        <Slider 
          aria-label="Default"
          valueLabelDisplay="auto"
          min={-200}
          max={200}
          value={vertical}
          onChange={(event) => setVertical(event.target.value)}
        />
        <h2>Blur</h2>
        <Slider 
          aria-label="Default"
          valueLabelDisplay="auto"
          min={0}
          max={200}
          value={blur}
          onChange={(event) => setBlur(event.target.value)}
        />
        <div style={{display: 'flex', justifyContent: 'space-around', padding: '20px 0px'}}>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{fontSize: '20px', fontWeight: 700, padding: '0px 20px'}}>Box Color</div>
            <input type="color" value={boxColor} onChange={(event) => setBoxColor(event.target.value)} style={{width: '100px'}} />
          </div>

          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{fontSize: '20px', fontWeight: 700, padding: '0px 20px'}}>Shadow Color</div>
            <input type="color" value={color} onChange={(event) => setColor(event.target.value)} style={{width: '100px'}} />
          </div>
        </div>
      </div>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography style={{fontSize: '20px', fontWeight: 700}}>Outline</Typography>
        <AntSwitch inputProps={{ 'aria-label': 'ant design' }} checked={checkOn} onChange={()=> setCheckOn(!checkOn)} />
        <Typography style={{fontSize: '20px', fontWeight: 700}}>Inset</Typography>
      </Stack>

      <div className="output">
        <div className="box" style={{boxShadow: `${checkOn ? 'inset' : ''} ${horizontal}px ${vertical}px ${blur}px ${color}`, backgroundColor: `${boxColor}`}}>
          <p>Box-shadow: {horizontal}px {vertical}px {blur}px {color}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
