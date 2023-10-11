// Import Next Components
import Head from "next/head";
import Link from "next/link";

// Importing Data
import { clients } from "../data/clientele";

// Importing Styles
import classes from "../styles/Home.module.css";

// React Icons
import { FiArrowUpRight } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

// Import Custom Components
import Social from "../components/Social";
import Button from "../components/Button";
import Projects from "../layouts/Home/Projects";
import Services from "../layouts/Home/Services";

// Defining Main Component
export default function Home() {
  return (
    <>
      <Head>
        <title>Geeky Vision | Home for Brand Creation</title>
        <meta
          name="description"
          content="Geeky Vision is your go-to media and web agency for expert Social Media Management, stunning Graphic Design and impressive Website Design. We blend geeky creativity with aesthetic finesse, delivering fun and engaging content that captivates your audience. Elevate your brand with our unique blend of expertise and creativity!"
        />
        {/* Social Media */}
        <meta property="og:title" content="Geeky Vision" />
        <meta
          property="og:url"
          content="https://www.instagram.com/geekyvision/"
        />
        <meta
          property="og:image"
          content="https://geekyvision.in/brand/brand-image.png"
        />
        {/* Twitter */}
        <meta name="twitter:title" content="Geeky Vision | Home for Brand Creation" />
        <meta
          name="twitter:description"
          content="Where Identities Are Woven into the timeless Fabric of Brands."
        />
        <meta
          name="twitter:image"
          content="https://geekyvision.in/brand/brand-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <section className={classes.home}>
        <div className={classes.home_first}>
          <div>
            <h1>We</h1>
            <h1 className="color-secondary">Digitize</h1>
            <h1>Ideas.</h1>
            <h3 className="color-secondary margin-top-small">
              & share it <span className="color-primary">with the World</span>!
            </h3>
          </div>
          <div className={classes.home_first_secondary}>
            <p className={classes.home_first_text + " margin-top-large"}>
              At Geeky Vision, we redefine brands through the artistry of
              Graphic Design, the functionality of Web Development, and the
              power of Content Marketing. Trusted by industry pioneers, we craft
              tailored solutions that transform concepts into compelling visual
              narratives, intuitive digital platforms, and engaging content
              strategies. Our dedicated team merges creativity with technical
              finesse, giving your brand a center stage. Whether you&#39;re a
              startup or an established enterprise, we got you.
            </p>
            <div className={classes.home_first_cta + " margin-bottom-medium"}>
              <Button
                isLink={true}
                href="https://forms.gle/N2gnndekukPcsirk8"
                isIcon={true}
                theme="primary"
                text="Get Started"
                Icon={FiArrowUpRight}
                className="margin-right-medium"
              />
              <div className={classes.home_first_social}>
                <Social
                  href="https://www.instagram.com/geekyvision/"
                  theme="primary"
                  Icon={SiInstagram}
                />
                <Social
                  href="https://www.linkedin.com/company/geekyvision"
                  theme="primary"
                  Icon={FaLinkedinIn}
                />

                <Social
                  href="https://twitter.com/geekyvision"
                  theme="primary"
                  Icon={FaTwitter}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.home_second}>
          <img
            className={classes.home_second_img}
            src="/images/display/home.webp"
          />
          <Link href="/knowus.pdf">
            <div className={classes.home_second_cta + " " + classes.home_cta}>
              <h3 className="color-tertiary">Have a Look!</h3>
            </div>
          </Link>
        </div>
        <div className={classes.home_third}>
          <h2 className={"color-secondary " + classes.home_third_text}>
            Discuss <span className="color-tertiary">YouR Ideas • </span>Discuss{" "}
            <span className="color-tertiary">YouR Ideas • </span>Discuss{" "}
            <span className="color-tertiary">YouR Ideas • </span>
            Discuss <span className="color-tertiary">YouR Ideas • </span>
            Discuss <span className="color-tertiary">YouR Ideas • </span>
            Discuss <span className="color-tertiary">YouR Ideas • </span>
          </h2>
        </div>
        <Services />

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
            <Link href="/">
              <div className={classes.home_fifth_cta + " " + classes.home_cta}>
                <h3 className="color-tertiary">How bout&#39;a Coffee?</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.home_clientele}>
          <div className={classes.home_clientele_head}>
            <h2 className="color-tertiary">
              Our <span className="color-secondary">Clientele</span>.
            </h2>{" "}
            <h3 className={"color-tertiary margin-top-small"}>
              Those who
              <span className="color-secondary"> trusted us </span>first.
            </h3>
            <p
              className={
                "margin-top-medium color-grey " +
                classes.home_clientele_sec_text
              }
            >
              The ones who trusted us first, sparking our passion for Graphic
              Design, Web Development, and Content Marketing magic! Ready to
              transform your brand journey with creativity and innovation? Join
              the Geeky Vision family, where every pixel tells a story!
            </p>
          </div>
          <div className={classes.home_clientele_div + " margin-top-large"}>
            {clients.map((client, index) => {
              return (
                <div key={index} className={classes.home_clientele_item}>
                  <img
                    src={`/images/clients/${client.image}.webp`}
                    className={client.invert && classes.invert}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Projects />
      </section>
    </>
  );
}
