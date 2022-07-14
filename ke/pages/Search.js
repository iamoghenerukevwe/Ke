import styles from   "../styles/search.module.css"
import Link from "next/link"
import Image from "next/image";
import { MdOutlineHomeWork,  MdLocationSearching } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';

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
        
            <div className={styles.searchContain}>
                <div className={styles.search}>
                <MdOutlineHomeWork size={25}/>
                <MdLocationSearching size={25}/>
                <FaMoneyBillWave size={25}/>
                <FiTarget size={25}/>
                </div>
                <div className={styles.button}>
                <Link href="/">Search</Link>
                </div>
            
            </div>
        
            <div className={styles.searchResults}>
            
            
            </div>
        
        
        </div>

    )
}

export default Search