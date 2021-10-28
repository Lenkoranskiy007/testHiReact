import React,{useState, useRef} from 'react'
import Vector from '../assets/Group 106.svg'
import Magnifing from '../assets/MagnifyingGlass.svg'
import Shoping from '../assets/ShoppingCartSimple.svg'
import User from '../assets/User.svg'
import Flag from '../assets/Flag_of_Russia.svg.png'
import CaretDown from '../assets/CaretDown.svg'
import WarningCircle from '../assets/WarningCircle.svg'
import Game1 from '../assets/game1.png'
import Game2 from '../assets/game2.png'
import Game3 from '../assets/game3.png'
import VectorGame1 from '../assets/Vectorgame.svg'
import VectorGame2 from '../assets/Vectorgame2.svg'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export const Header = () => {


  const inputEl = useRef();

 
 

  
  
  return < >    
  
    
  <div className="wrapper">
  <header ref={inputEl}  className="header">
  <nav className="nav"> 
  <div className="nav__img">
    <img src={Vector} alt="Vector"/>
  </div>
  <div className="nav__menu">
    <a href=""> <img src={Magnifing} alt="Magnifing"/></a>
    <a href=""> <img src={Shoping} alt="Shoping"/></a>
    <a href=""> <img src={User} alt="User"/></a>
    <a href=""> <img className="flag" src={Flag} alt="Flag"/></a>  
    <LongMenu/>   
  
  </div>

 </nav>
 <div className="vector">
   <a href="" className="vector1"> <img  src={VectorGame1} alt="VectorGame1"/></a>
   <a href="" className="vector2">  <img  src={VectorGame2} alt="VectorGame2"/></a>
 </div>
 <div className="info">
   <div className="info__income">
    <div className="price">Цена<span> 100$</span></div>  
     <div className="percent">   Доходность 15%</div>
   <img className="warning" src={WarningCircle} alt="WarningCircle"/>
 <a href="" className="token"><span>Купить токен</span></a>
   </div>
   <div className="info__moments">
     <div className="game"><img src={Game1} alt="Game1"/> <span>Игровые моменты</span> </div>
     <div className="game"><img src={Game2} alt="Game2"/></div>
     <div className="game"><img src={Game3} alt="Game3"/></div>
   </div>
 </div>
 </header>
  </div>

</>
}




const options = [
  'О нас',
  'Email',
  'Блог',
  'FAQ'
 
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
             <img className="caret" src={CaretDown} alt="CaretDown"/>

      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            marginLeft:'230px',
            backgroundColor:'#cb951f',
            color: 'white',
            width: '10ch',
            
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
