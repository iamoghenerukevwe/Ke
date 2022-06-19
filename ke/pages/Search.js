import styles from   "../styles/search.module.css"
import Link from "next/link"
import Image from "next/image";

const Search = () => {
    return(
        <div  className={styles.container}>
            
            <div className={styles.upload}>
            <div className={styles.first}>
            <Image src="/assets/site.png" alt="" width="25" height="25" />
            </div>
            <div className={styles.second}>
            <Link href="/">Upload</Link>
            </div>
            <div className={styles.third}>
             M
            </div>
            
            </div>
        
            <div className={styles.search}>
            
            
            </div>
        
            <div className={styles.searchResults}>
            
            
            </div>
        
        
        </div>

    )
}

export default Search