const PokemonProfile = (props) => {
    console.log(props.data)
    return (
        <div>
            <h2>Pokemon Profile</h2>
            {props.data}
        </div>
    )
}

export default PokemonProfile 