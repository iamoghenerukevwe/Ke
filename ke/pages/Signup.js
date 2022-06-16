import styles from   "../styles/Signup.module.css"
import Image from "next/image";
import { FcGoogle } from 'react-icons/fc';
import { IoEnterOutline } from 'react-icons/io5';

const Signup  = ()=> {
    return(
        <div className={styles.Signup}>

            <div className={styles.container}>
                
                <div className={styles.sign}>

                <div className={styles.logo}>
                <Image src="/assets/site.png" alt="" width="60" height="26" />
                </div>

                    <div className={styles.first}>
                        Sign In to Ke
                    </div>


                    <div className={styles.second}>
                        <a href="#" ><FcGoogle/>Sign in with Google</a>
                    </div>
                    
                    Or Sign-in with your email

                    <div className={styles.third}>
                    
                    <input type="text" className={styles.fname} name="firstname" placeholder="Email address"></input>
                    <input type="password" className={styles.fname} name="password" placeholder="Password"></input>
                    

                    </div>

                   <div className={styles.fourth}>
                        <a href="#">Sign in<IoEnterOutline size={30}/></a> 
                   </div>


                   <div className={styles.fifth}>
                        <a href="#">Forgot Password?</a>
                   </div>

                    

                    


                </div>

                <div className={styles.img}>
                    
                </div>

            </div>

        </div>
        
        
        )
}

export default Signup