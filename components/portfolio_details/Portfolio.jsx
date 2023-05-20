import React from 'react'
import styles from './Portfolio.module.css'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <>
   <section className={styles.portfolio} id='portfolio'>
      <p className={styles.heading}>Our <span style={{color:"#5abc2e"}}>Portfolio</span></p>

      <main className={styles.portfolio_content}>
        <div className={styles.portfolio_content_item}>
            <Image src="/portfolio__1.png" alt="" width={1000} height={300} className={styles.img}/>
        </div>
        <div className={styles.portfolio_content_item}>
            <Image src="/portfolio__2.png" alt="" width={1000} height={300} className={styles.img}/>
        </div>
        <div className={styles.portfolio_content_item}>
            <Image src="/portfolio__3.png" alt="" width={1000} height={300} className={styles.img}/>
        </div>

        <div className={styles.portfolio_content_item}>
            <Image src="/portfolio__4.png" alt="" width={1000} height={300} className={styles.img}/>
        </div>

        <div className={styles.portfolio_content_item}>
            <Image src="/portfolio__7.png" alt="" width={1000} height={300} className={styles.img}/>
        </div>

        <div className={styles.portfolio_content_item}>
            <Image src="/portfolio__6.png" alt="" width={1000} height={300} className={styles.img}/>
        </div>
            
       

      </main>
      </section>
    </>
  )
}

export default Portfolio