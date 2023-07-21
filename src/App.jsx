import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/melovitor.png',
      name: 'Vitor Melo',
      role: 'Fullstack Developer'
    },
    content: 'Fala galera✌, acabei de subir o primeiro projeto da trilha Ignite da Rocketseat!',
    publishedAt: new Date('07/21/2023 12:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/melovitor.png',
      name: 'Vitor Melo',
      role: 'Fullstack Developer'
    },
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laborum repellendus veritatis enim laudantium. Ratione quaerat tempora aut sint soluta, mollitia ea reiciendis ab doloribus.',
    publishedAt: new Date('07/21/2023 16:00')
  },
]

export default function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>  
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

