const PokemonProfile = (props) => {
    console.log(props.data)
    return (
        <div>
            <h2>Pokemon Profile</h2>
           <p>Experience: {props.data.base_experience}</p>
        </div>
    )
}

export default PokemonProfile 