import styles from './Sidebar.module.css'
import cover from '../../assets/cover.png'
import {PencilSimpleLine} from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar(){
    return( 
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src={cover} 
                alt="Cover do usuario"
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/melovitor.png"/>
                <strong>Vitor Melo</strong>
                <span>Fullstack Developer</span>
            </div>

            <footer>
                <a href="https://github.com/melovitor" target="_blank">
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    )
}