import React,{useState, useMemo , useEffect} from 'react';
import {Link} from 'react-router-dom'
import reliable from '../assets/reliable.jpg';
import './NavBar.css';
function NavBar() {

  const [isActive , setIsActive] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
 
  const textOptions= useMemo(()=>[
    'We provide reliable 24 hours security service',
    'Feel free to call us on this number +012 124 1252, email us on admin@reliable.co.za, Whatsapp us on 030693340',
    'Trusted but large organisatrion and community with response time to an emergency',
  ],[]);
  const [displayText, setDisplayText]= useState(textOptions[0]);

   useEffect(()=>{
    const interval = setInterval(()=>{
      setTextIndex((prevIndex)=>(prevIndex+1)% textOptions.length);
    },5000);
    return()=>clearInterval(interval);
   },[textOptions.length])

   useEffect(()=>{
    const targetText = textOptions[textIndex];
    let currentIndex =0;

    const typewritterInterval= setInterval(()=>{
      if(currentIndex <= targetText.length){
        setDisplayText(targetText.substring(0, currentIndex));
        currentIndex++;
      }else{
        clearInterval(typewritterInterval);
      }
    },10)
   },[textIndex, textOptions])

  const toogleActiveClass=()=>{
    setIsActive(!isActive);
  }
  const removeActive=()=>{
    setIsActive(false);
  }
  return (
    <div className='nav'>
      
      <div className='advert'>
        <h2>{displayText}</h2>
      </div>
      
      <div className=' navigation'>
        
        <img src={reliable} alt='logo'/>
     
        <ul className={`nav-links ${isActive ? 'active': ''}`}>
          <li onClick={removeActive}><Link className='link' to='/'>HOME</Link> </li>
          <li onClick={removeActive}><Link className='link' to='/about'>ABOUT US </Link></li>
          <li onClick={removeActive}><Link className='link' to='/services'>SERVICES </Link> </li>
          <li onClick={removeActive}><Link className='link' to='/testimony'>TESTEMONY </Link></li>
          <li onClick={removeActive}><Link className='link' to='/contactUs'>CONTACT US </Link></li>
        </ul>
        {/* <div className='buttons'>
          <button>
            Sign Up
          </button>
        </div> */}
        <div className={`hambuger ${isActive ? 'active':''}`} onClick={toogleActiveClass}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>
      </div>
       <div></div>
      
      <hr/>
    </div>
  );
}

export default NavBar;
