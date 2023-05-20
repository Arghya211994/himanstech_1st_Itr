import React from 'react'
import styles from "./Why.module.css"
import {AiTwotoneSetting} from "react-icons/ai"
import {RiUserSettingsFill} from "react-icons/ri"
import {RiSettingsFill} from "react-icons/ri"

const Why = () => {
  return (
    <>
    <section className={styles.whyus} id='why-us'>
        <p className={styles.heading}> Why Choose <span style={{color:"#5abc2e"}}>Us ?</span></p>
        <p>At Himanstech, we recognize that every business is different and deserves a customized approach. Because of this, we take the time to comprehend your objectives, difficulties, and achievement vision. Take the time to comprehend your objectives, difficulties, and achievement vision because of this. Our team of industry experts collaborates directly with you to develop solutions that are specifically created to support the success of your business online. We take great satisfaction in offering customers unmatched outcomes and customer service</p>

        <main className={styles.whyus_content}>

          <div className={styles.whyus_content_item}>

             <div className={styles.logo}>
              <AiTwotoneSetting/>
             </div>

             <div className={styles.innercontent}>
                <p>Customized <span style={{color:"#5abc2e"}}>Solutions</span></p>
                <p>We believe every business is unique and to meet the requirements we have flexible and customised - tailored solutions as per your requirement.</p>
             </div>

             <button>
              Read More
             </button>

          </div>


          <div className={styles.whyus_content_item}>

             <div className={styles.logo}>
              <RiUserSettingsFill/>
             </div>

             <div className={styles.innercontent}>
                <p>Client Centric <span style={{color:"#5abc2e"}}>Approach</span></p>
                <p>We prioritize clients, delivering the best solutions and ongoing support to foster long-term relationships</p>
             </div>

             <button>
              Read More
             </button>

          </div>


          <div className={styles.whyus_content_item}>

             <div className={styles.logo}>
              <RiSettingsFill/>
             </div>

             <div className={styles.innercontent}>
                <p>Quality and <span style={{color:"#5abc2e"}}> Punctuality</span></p>
                <p>We are committed to delivering high-quality projects while following industry best practices and standards with a track record of delivering projects on time and within budget</p>
             </div>

             <button>
              Read More
             </button>

          </div>
          
        </main>
    </section>
    </>
  )
}

export default Why
