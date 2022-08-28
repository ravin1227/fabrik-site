import React, {useRef, useEffect} from 'react'
import './header.css'
import { Container } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS =[
    {
        display:'Home',
        url:'/home'
    },
    {
        display:'Market',
        url:'/market'
    },
    {
        display:'Contact',
        url:'/contact'
    },
    
];

const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const fixHeader = ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add("header_shrink");
         }else{
            headerRef.current.classList.remove("header_shrink");
         }
    };


    useEffect(()=>{
       window.addEventListener("scroll",fixHeader);
       return ()=>{
        window.removeEventListener("scroll",fixHeader);
       };
    },[]);
    
    const toggleMenu = ()=> menuRef.current.classList.toggle('active_menu')    

  return (
    <header className='header' ref={headerRef}>
        <Container>
            <div className="navigation">
                <div className="logo">
                    <h2 className='d-flex gap-2 align-item-center'>
                        <span><i className="ri-fire-fill"></i></span>
                        Fabrik
                     </h2>
                </div>

                <div className="nav_menu" ref={menuRef} onClick={toggleMenu}>
                    <ul className="nav_list">
                        {NAV_LINKS.map((item, index)=>(
                            <li className="nav_item" key={index}>
                                <NavLink to={item.url} className={navClass=> navClass.isActive ? 'active' : '' }>{item.display}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="nav_right d-flex align-items-center gap-5">
                    <button className="btn d-flex gap-2 align-items-center">
                        <span ><i className='ri-wallet-line'></i></span>
                        <Link to='/create'>
                            Upload 3D Model
                        </Link> 
                    </button>
                    <span className="mobile_menu"><i className="ri-menu-line" onClick={toggleMenu}></i></span>
                </div>

            </div>
        </Container>
    </header>
  )
}

export default Header