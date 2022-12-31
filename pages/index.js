import Head from "next/head";
import classes from "../styles/Home.module.css";
import Button from "../components/Button";
import { FiArrowUpRight } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

import Social from "../components/Social";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Geeky Vision</title>
        <meta
          name='description'
          content='At Geeky Vision, we digitize ideas while sharing your vision.'
        />
      </Head>
      <section className={classes.home}>
        <div className={classes.home_first}>
          <div>
            <h1>We</h1>
            <h1 className='color-secondary'>Digitize</h1>
            <h1>Ideas.</h1>
            <h3 className='color-secondary margin-top-small'>
              & share it <span className='color-primary'>with the World</span>!
            </h3>
          </div>
          <div className={classes.home_first_secondary}>
            <p className={classes.home_first_text + " margin-top-large"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non dolor tempus, tincidunt purus in, venenatis magna. Curabitur
              scelerisque sem sed ex convallis ultricies. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Integer tempor lorem ornare sagittis efficitur. Ut quis maximus
              turpis. Sed molestie libero nunc, id tincidunt arcu egestas non.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere curae; Integer a fermentum tortor.
            </p>
            <div className={classes.home_first_cta + " margin-bottom-medium"}>
              <Button
                isLink={true}
                href='/'
                isIcon={true}
                theme='primary'
                text='Get Started'
                Icon={FiArrowUpRight}
                className='margin-right-medium'
              />
              <div className={classes.home_first_social}>
                <Social href='/' theme='primary' Icon={FaTwitter} />
                <Social href='/' theme='primary' Icon={SiInstagram} />
                <Social href='/' theme='primary' Icon={FaLinkedinIn} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.home_second}>
          <img
            className={classes.home_second_img}
            src='/images/display/home.jpeg'
          />
          <Link href='/'>
            <div className={classes.home_second_cta}>
              <h3 className='color-tertiary'>Have a Look!</h3>
            </div>
          </Link>
        </div>
        <div className={classes.home_third}>
          <h2 className={"color-secondary " + classes.home_third_text}>Discuss <span className="color-tertiary">Your Ideas • </span>Discuss <span className="color-tertiary">Your Ideas • </span>Discuss Your Ideas</h2>
        </div>
      </section>
    </>
  );
}
