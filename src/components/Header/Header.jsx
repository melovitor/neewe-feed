import styles from'./Header.module.css'
import neeweLogo from '../../assets/logo.png'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={neeweLogo} alt="Neewe Logo" />

            <strong>| Neewe</strong>
        </header>

    )
}