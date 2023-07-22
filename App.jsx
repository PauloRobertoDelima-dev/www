
import { Post } from './Post';
import { Header } from './components/header';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Post
       author="Paulo Roberto De Lima"
       content="Se não foi sábio para apreender com os erros dos outros, pelo menos seja inteligente e aprenda com os seus própios.!"
      />
      <Post
       author="Pablo Marçal"
       content="Erre rápido!"
      />
    </div>
  )
}


