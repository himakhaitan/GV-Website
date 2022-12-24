import classes from "../styles/layouts/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Social from "../components/Social";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

const Footer = ({}) => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footer_main}>
          <h3 className='color-tertiary'>
            Keep In <span className='color-secondary'>Touch</span>
          </h3>
          <Image
            className='margin-top-large'
            src='/brand/logo-purple-1080x1080.png'
            alt='Geeky Vision Logo'
            width={80}
            height={80}
          />
          <p className={`margin-top-small color-grey + ${classes.footer_text}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non
            dolor tempus.
          </p>
          <div className={classes.footer_social + " margin-top-medium"}>
            <Social href='/' theme='secondary' Icon={FaTwitter} />
            <Social href='/' theme='secondary' Icon={SiInstagram} />
            <Social href='/' theme='secondary' Icon={FaLinkedinIn} />
          </div>
        </div>
        <div className={classes.footer_secondary}>
          <div className={classes.footer_item}>
            <Link href='/'>
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                FAQ
              </h5>
            </Link>
          </div>
          <div className={classes.footer_item}>
            <Link href='/'>
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                Company
              </h5>
            </Link>
          </div>
          <div className={classes.footer_item}>
            <Link href='/'>
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                Projects
              </h5>
            </Link>
          </div>
          <div className={classes.footer_item}>
            <Link href='/'>
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                LinkedIn
              </h5>
            </Link>
          </div>
          <div className={classes.footer_item}>
            <Link href='/'>
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                Twitter
              </h5>
            </Link>
          </div>
          <div className={classes.footer_item}>
            <Link href='/'>
              <h5 className={`color-tertiary ${classes.footer_item_text}`}>
                Instagram
              </h5>
            </Link>
          </div>
        </div>
        <div className={classes.footer_tertiary}>
          <h5 className={"color-tertiary " + classes.footer_tertiary_heading}>
            Not Quite <span className='color-secondary'>Ready?</span>
          </h5>
          <p className='color-grey margin-top-medium'>
            We send out our best strategies in a juciy weekly newsletter. Only
            Value.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
