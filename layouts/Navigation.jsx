import classes from "../styles/layouts/Navigation.module.css";

// Importing Next Components
import Image from "next/image";
import Link from "next/link";

const Navigation = ({}) => {
  return (
    <section className={classes.nav}>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>About Us</h4>
        </Link>
      </div>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Project</h4>
        </Link>
      </div>
      <div className={classes.nav_item}>
        <Link href='/' className={classes.nav_logo}>
          <Image  width='60' height='60' src='/brand/logo-1080x1080.webp' />
        </Link>
      </div>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Services</h4>
        </Link>
      </div>
      <div className={classes.nav_item + " " + classes.nav_item_link}>
        <Link href='/'>
          <h4 className={classes.nav_link}>Let's talk</h4>
        </Link>
      </div>
    </section>
  );
};

export default Navigation;
