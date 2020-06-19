import Home from './components/home/Home'
import Cadastro from './components/cadastro/Cadastro'

export const routes = [
  { path : '', component: Home, name: 'Home' },
  { path : '/cadastro', component: Cadastro, name: 'Cadastro' }
]