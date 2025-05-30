import './App.css'
import Loader from './components/loader' ;
import PokemonProfile from './components/pokemonProfile';
import { useGetPokemonByNameQuery } from './services/pokemon';

function App() {
   const { data , isLoading, isError } = useGetPokemonByNameQuery("ditto")
   
   if(isError) {
    return <p>Error laoding pokemon character</p>
   }

   if (isLoading) {
    return <loader />
   }

   return (
    <div className='App'>
      <header className='App-header'>
        <h1>REDUX</h1>
      </header>
      <PokemonProfile data={data}/>

    </div>
   )
}

export default App;