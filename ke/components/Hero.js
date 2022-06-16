import styles from "../styles/hero.module.css"

const Hero = () => {
  return (
    <div className={styles.hero}>

        <video autoPlay loop muted className={styles.video}>         
        <source src="/assets/bg.mp4" type="video/mp4"/>       
        </video>
      <div className={styles.content}>
          <div  className={styles.imp}>
          The More the Merrier
          </div>
          <div  className={styles.sub}>
          Share your apartment with friends, get flexible roomates today
          </div>


          <div className={styles.all}>
            <input type="text" className={styles.fname} name="firstname" placeholder="Location"></input>
            <div className={styles.ctab}>
            <a href="#"><span>Get Started</span></a>
          </div>
        </div>
          
      
      </div>
    
    
    
    
    
    
    </div>
  )
}

export default Hero