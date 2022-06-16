import Image from "next/image";
import Link from "next/link";
import styles from "../styles/nav.module.css"

const Nav = () => {
  return (
    <div className={styles.container}>

      <div className={styles.logo}>
        <Image src="/assets/site.png" alt="" width="60" height="26" />
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

export default Nav