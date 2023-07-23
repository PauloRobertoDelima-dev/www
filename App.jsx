
import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {

  return (
    <div>
      <Header />
       <div className={styles.wrapper}>
         <Sidebar />
         <main>
           <Post
           author="Paulo Roberto De Lima"
           content="Se não foi sábio para apreender com os erros dos outros, pelo menos seja inteligente e aprenda com os seus própios.!"
           />
           <Post
           author="Pablo Marçal"
           content="Erre rápido!"
           />
         </main>
      </div>
    </div>
  )
}


