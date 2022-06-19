import Image from "next/image";
import Link from "next/link";
import styles from "../styles/property.module.css"

const Property = () => {
  return (
    <div className={styles.container}>

      <div className={styles.logo}>
        <Image src="/assets/site.png" alt="" width="25" height="25" />
      </div>

      <div className={styles.cta}>
      <div className={styles.loginButton}>
      <a href="#">Sign In</a>
      </div>
      <div className={styles.signUpButton}>
      <Link href="/Signup">Sign Up</Link>
      </div>

     
      </div>
    
    </div>
  )
}

export default Property