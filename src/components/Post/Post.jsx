import { useState } from 'react'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'

export function Post({author, content, publishedAt}){
    const [comments, setComments] = useState([{
        id: Math.floor(10000* Math.random()),
        content: 'Que legal! Vou conferir!',
    }])
    const [newCommentText, setNewCommentText] = useState('')
     
    const publishedDateFormattedTitle = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale:ptBR
    })

    const publishedDateFormattedDateTime = format(publishedAt, "dd'/'MM'/'yyyy HH:mm", {
        locale:ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix: true
    })


    function handleCreateNewComment() {
        event.preventDefault()

        const newCommentObj = {
            id: Math.floor(10000* Math.random()),
            content: newCommentText,
        }

        setComments([...comments, newCommentObj])
        setNewCommentText('')

    }

    function deleteComment(commentId){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment.id !== commentId
        })
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormattedTitle} dateTime={publishedDateFormattedDateTime}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            
            <div className={styles.content}>
                <p>{content}</p>
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={() => { 
                        event.target.setCustomValidity('')
                        setNewCommentText(event.target.value) 
                    }}
                    onInvalid={() => {
                        event.target.setCustomValidity('Escreva um comentário para publicar!')
                    }}
                    required
                />
                <footer>
                    <button 
                        type='submit'
                        disabled={isNewCommentEmpty}
                    >Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment
                        key={comment.id}
                        content={comment.content}
                        onDeleteComment={deleteComment}
                        id={comment.id}
                    />
                })}            
            </div>
        </article>
    )
}