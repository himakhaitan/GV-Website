import Head from "next/head";
import classes from "../styles/Home.module.css";
import Button from "../components/Button";
import { FiArrowUpRight } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import Label from "../components/Label";
import Social from "../components/Social";
import Link from "next/link";

// const ServiceItem = ({ Icon, text }) => {
//   return (
//     <div className={classes.service_item}>
//       <div className={classes.service_item_icon}>{Icon}</div>
//       <h5 className={`color-tertiary ${classes.service_item_text}`}>{text}</h5>
//     </div>
//   );
// };

const ServiceBar = ({ text, image = "/images/display/home.jpeg" }) => {
  return (
    <>
      <div className={classes.service_bar}>
        <div>
          <h3 className={classes.service_bar_head}>
            {text}
            <span>•</span>
          </h3>
        </div>
        <div className={classes.service_bar_icon}>
          <BsArrowUpRight />
        </div>
        <div className={classes.service_bar_img}>
          <img src={image} />
        </div>
      </div>
    </>
  );
};

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
            <div className={classes.home_second_cta + " " + classes.home_cta}>
              <h3 className='color-tertiary'>Have a Look!</h3>
            </div>
          </Link>
        </div>
        <div className={classes.home_third}>
          <h2 className={"color-secondary " + classes.home_third_text}>
            Discuss <span className='color-tertiary'>YouR Ideas • </span>Discuss{" "}
            <span className='color-tertiary'>YouR Ideas • </span>Discuss{" "}
            <span className='color-tertiary'>YouR Ideas • </span>
            Discuss <span className='color-tertiary'>YouR Ideas • </span>
            Discuss <span className='color-tertiary'>YouR Ideas • </span>
            Discuss <span className='color-tertiary'>YouR Ideas • </span>
          </h2>
        </div>
        <div className={classes.home_fourth}>
          <div className={classes.home_fourth_prim + " margin-bottom-large"}>
            <div className={classes.home_fourth_left}>
              <h1 className={`color-tertiary margin-bottom-small`}>
                <span className='color-secondary'>Our </span>Services
                <span className='color-secondary'>.</span>
              </h1>
              <p className={classes.home_fourth_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                non dolor tempus consectetur adipiscing elit. Aenean non dolor
                tempus.
              </p>
            </div>
            <div className={classes.home_fourth_right}>
              <Label Icon={<TfiWorld />} text='Development' />
              <Label Icon={<TfiWorld />} text='Design' />
              <Label Icon={<TfiWorld />} text='Marketing' />
              <Label Icon={<TfiWorld />} text='Management' />
            </div>
          </div>
          <div className={classes.home_fourth_sec}>
            <ServiceBar text='Web DEsIGn' image='/images/services/web.png' />
            <ServiceBar
              text='bRand DEsIGn'
              image='/images/services/branddesign.png'
            />
            <ServiceBar
              text='Graphic DEsIGn'
              image='/images/services/graphicdesign.png'
            />
          </div>
        </div>
        <div className={classes.home_fifth}>
          <div className={classes.home_fifth_container}>
            <h2>
              A <span className={classes.home_fifth_text}>cReATIVe</span> mind
              knows how to do the{" "}
              <span className={classes.home_fifth_text}>RIgHt THiNg</span> at
              the <span className={classes.home_fifth_text}>RIgHt plACe</span>{" "}
              and the{" "}
              <span className={classes.home_fifth_text}>RIgHt TiMe</span>.
            </h2>
            <Link href='/'>
              <div className={classes.home_fifth_cta + " " + classes.home_cta}>
                <h3 className='color-tertiary'>How bout'a Coffee?</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.home_sixth}>
          <div className={classes.home_sixth_header}>
            <div>
              <h1 className='margin-bottom-large color-tertiary'>
                Best <span className='color-secondary'>Projects</span>.
              </h1>
              <div className={classes.home_sixth_labels}>
                <Label Icon={<TfiWorld />} text='Development' />
                <Label Icon={<TfiWorld />} text='Design' />
                <Label Icon={<TfiWorld />} text='Marketing' />
                <Label Icon={<TfiWorld />} text='Management' />
              </div>
            </div>
            <p className={classes.home_sixth_text + " margin-bottom-medium"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non dolor tempus consectetur ipsum dolor sit amet, consectetur adipiscin.
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
