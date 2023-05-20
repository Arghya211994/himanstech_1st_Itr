
import React from 'react'
import styles from "./Services.module.css"
import Image from 'next/image'

const Services = () => {
  return (
    <>
    <section className={styles.service} id='services'>
      <p className={styles.heading}>Our <span style={{color:"#5abc2e"}}>Services</span></p>
      <p> Welcome you to<span style={{color:"#5abc2e"}}> Himanstech. </span>A leading Web designing, Development, Digital marketing, UI/UX designing company with a vision to help realize our client’s digital dreams and execute them to perfection. Your one stop shop for Digital Marketing, App Development, UI/UX, Web Development, .</p>

      <main className={styles.service_content}>

        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/service_img1.jpeg" alt="" width={1000} height={300}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>UI-UX </span>CREATIVE</h4>
            <p>We are masters in providing the best digital experience to your customers in the digital world. Our UI/UX designing team will exceed your expectations in the process of digitizing.</p>
          
        </div>
        </div>

        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/services_img2.jpeg" alt="" width={1000} height={300}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>WEB </span>DEVELOPMENT</h4>
            <p>We specialize in customized web development solutions that meet your unique requirements. Our collaborative approach ensures a website that represents your brand and enhances user experience.</p>
          
        </div>
        </div>

        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/services_img3.jpeg" alt="" width={1000} height={300}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>APP </span>DEVELOPMENT</h4>
            <p>Combines industry best practices and cutting-edge technologies to build secure and scalable software. From creating new apps to enhancing existing ones, we help achieve your business goals.</p>
          
        </div>
        </div>


        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/services_img4.jpeg" alt="" width={1000} height={300}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>FULLSTACK </span>DEVELOPMENT</h4>
            <p>Our experienced full-stack developers integrate front-end and back-end technologies to create scalable and efficient apps. From database design to user interface development, we manage every aspect of full-stack development.</p>
          
        </div>
        </div>


        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/services_img5.jpeg" alt="" width={1000} height={300}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>DATA </span>ANALYTICS</h4>
            <p>At Himanstech, we work closely with clients, understanding their goals to create innovative strategies for measurable results. Get data mining, predictive modeling, and statistical analysis support for your business goals.</p>
          
        </div>
        </div>

        <div className={styles.service_content_item}>
          <div className={styles.overlay}></div>
          <Image src="/services_img6.jpeg" alt="" width={1000} height={300}/>
          <div className={styles.service_content_item_layer}>

            <h4><span style={{color:"#5abc2e"}}>DIGITAL</span>MARKETING</h4>
            <p>Himanstech uses advanced technologies and strategies for SEO, SMM, email marketing, PPC advertising, and content marketing. We guarantee effective business solutions tailored to your needs.</p>
          
        </div>
        </div>


      </main>
    </section>
    </>
  )
}

export default Services
