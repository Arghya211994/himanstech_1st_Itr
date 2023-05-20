import styles from "./Footer.module.css";
import { BsTelephoneInboundFill } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {RiInstagramFill} from "react-icons/ri"
import {GrFacebook} from "react-icons/gr"
import {FaTwitter} from "react-icons/fa"
import {BsPinterest} from "react-icons/bs"
import {IoLocationSharp} from "react-icons/io5"

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.footer_item}>
          <h1>We make <span>brands</span> creative.</h1>
        </div>

        <div className={styles.footer_item}>
          <h4>Contact Info</h4>
          <div>
            <span> <BsTelephoneInboundFill /></span>
            <p>+91 8334061823</p>
          </div>

          <div>
            <span><MdEmail/></span>
            <p>info@himanstech.com</p>
          </div>

          <div className={styles.social}>
            <span><GrFacebook/></span>
            <span><RiInstagramFill/></span>
            <span><FaTwitter/></span>
            <span><BsPinterest/></span>
          </div>

        </div>

        <div className={styles.footer_item}>

          <h4>Our Office</h4>

          <div>
            <span><IoLocationSharp/></span>
            <p>Module 102, Webel IT Park, Phase II, Buddhapark, Kalyani, West Bengal 741235</p>
          </div>

          <div>
            <span><IoLocationSharp/></span>
            <p> PS Qube, Noapara,
              NH12, Newtown, Kolkata, West Bengal 700156</p>
          </div>

        </div>
      </section>
      <section className={styles.subfooter}>
        <p>Copyright © 2022 HimansTech Design: Himanstech</p>
      </section>
    </>
  );
};

export default Footer;


