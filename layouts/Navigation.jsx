import classes from "../styles/layouts/Navigation.module.css";

// Importing Next Components
import Image from "next/image";
import Link from "next/link";

import {useState,useEffect} from 'react'

const Navigation = ({}) => {
  const [isClient, setIsClient] = useState(false);
 

  useEffect(() => {
    window.addEventListener('scroll', myFunction);
    return () => {
      window.removeEventListener('scroll', myFunction);
    };
  }, []);



  
    function myFunction() {
   
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
      console.log(scrolled)
    }
   
  
  
  return (
   /* <section className={classes.nav}>
      <div className={classes.nav_item}>
        <Link href='/'>
          <h4 className={classes.nav_link}>About Us</h4>
        </Link>
      </div>
      <div className={classes.nav_item}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Project</h4>
        </Link>
      </div>
      <div className={classes.nav_item}>
        <Link href='/' className={classes.nav_logo}>
          <Image  width='60' height='60' src='/brand/logo-1080x1080.png' />
        </Link>
      </div>
      <div className={classes.nav_item}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Services</h4>
        </Link>
      </div>
      <div className={classes.nav_item}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Let's talk</h4>
        </Link>
      </div>
    </section>
    */
   <>
   
   <div className={classes.progresscontainer}>
    <div className={classes.progressbar} id="myBar"></div>
  </div>
   <div >
    
     <div className="navbar" style={{display:'flex',justifyContent:'space-around',flexDirection:'row',backgroundColor:'aliceblue',height:'70px',paddingTop:'10px',}}>
      <div className="div">
      <div className={classes.li}>
       About Us
      </div>
      </div>
      <div className="div">
      <div className={classes.li}>
       Projects
      </div>
      </div>
      <div className={classes.logo}>
      <Link href='/' >
          <Image  width='60' height='60' src='/brand/logo-1080x1080.png' />
        </Link>
</div>
<div className="div">
      <div className={classes.li}>
      Service
      </div>
      </div>
      <div className="div">
      <div className={classes.li}>
      Connect Us
      </div>
      </div>
     </div>

    </div>

   
   
   </>
  );
};

export default Navigation;
