import styles from "../styles/hero.module.css"

const Hero = () => {
  return (
    <div className={styles.hero}>

    <video autoplay muted loop className={styles.video}>         
    <source src="./" type="video/mp4"/>       
    </video>
      <div className={styles.content}>
          <div  className={styles.imp}>
          Find your next <br/>best cozy place
          </div>
          <div  className={styles.sub}>
          We are comitted to helping you
          find your  <br/>dream apartment without financial constraints 
          </div>
          <div className={styles.ctab}>
          <a href="#"><span>Explore Listings</span></a>
          </div>
      
      </div>
    
    
    
    
    
    
    </div>
  )
}

export default Hero