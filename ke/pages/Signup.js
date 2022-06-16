import styles from   "../styles/Signup.module.css"

const Signup  = ()=> {
    return(
        <div className={styles.Signup}>

            <div className={styles.container}>
                
                <div className={styles.sign}>
                    
                    Sign In to Ke
                    <a href="#"><span>Sign in with Google</span></a>
                    
                    Or Sign-in with your email
                    <input type="text" className={styles.fname} name="firstname" placeholder="Email address"></input>
                    <input type="password" className={styles.fname} name="password" placeholder="Password"></input>
                    <a href="#"><span>Sign in with Google</span></a>

                    <a href="#"><span>Forgot Password?</span></a>

                    


                </div>

                <div className={styles.img}>
                
                </div>

            </div>

        </div>
        
        
        )
}

export default Signup