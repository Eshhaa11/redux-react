import './App.css'
import Loader from './components/loader' ;
import { useGetPokemonByNameQuery } from './services/pokemon';

function App() {
   const { data , isLoading, isError } = useGetPokemonByNameQuery("ditto")

   if(isError) [
    return <p>Error laoding pokemon character</p>
   ]
}