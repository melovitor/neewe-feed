import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'

import {ThumbsUp, Trash} from 'phosphor-react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

export function Comment({content, onDeleteComment, id}){

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(id)
    }

    const publishedDateFormattedTitle = format(new Date, "d 'de' LLLL 'às' HH:mm'h'", {
        locale:ptBR
    })

    const publishedDateFormattedDateTime = format(new Date, "dd'/'MM'/'yyyy HH:mm", {
        locale:ptBR
    })


    const publishedDateRelativeToNow = formatDistanceToNow(new Date,  {
        locale:ptBR,
        addSuffix: true
    })

    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://media.licdn.com/dms/image/D4D03AQEsdzULZBGUhA/profile-displayphoto-shrink_400_400/0/1689791139281?e=1695254400&v=beta&t=WHT25Vxsogn6rRpV6IUCOkYziboQ8YnpZcwVyrtg5CM" 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vitor Melo <span>(você)</span></strong>
                            <time title={publishedDateFormattedTitle}  dateTime={publishedDateFormattedDateTime} >{publishedDateRelativeToNow}</time>
                        </div>
                        <button
                            onClick={handleDeleteComment} 
                            title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={() => {setLikeCount(likeCount+1)}}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}