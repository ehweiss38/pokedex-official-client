import React from "react";
import Upper from "../helpers/Upper"
import DashDelete from "../helpers/DashDelete"

//note forms dont work. Should remove entirely

const List=(props)=>{
    let count=0
    const items=props.list[2].data.map(mon=>{
        if(props.list[0]==='type'){
            count++
            return(
            <tr key={mon.pokemon.name}>
                <th>{count}</th>
                <td><a onClick={()=>{props.onSearchSubmit(mon.pokemon.name)}}>{DashDelete(mon.pokemon.name)}</a></td>
                <td>{mon.pokemon.url.slice(34,-1)}</td>
            </tr>
            )
        }
        if(props.list[0]==='generation'){
            count++
            console.log(mon)
            return(
                <tr key={mon.name}>
                    <th>{count}</th>
                    <td><a onClick={()=>{props.onSearchSubmit(mon.name)}}>{DashDelete(mon.name)}</a></td>
                    <td>{mon.url.slice(42,-1)}</td>
                </tr>
                )
        }
        if(props.list[0]==='region'){
            count++
            console.log(mon)
            return(
                <tr key={mon.pokemon_species.name}>
                    <th>{count}</th>
                    <td><a onClick={()=>{props.onSearchSubmit(mon.pokemon_species.name)}}>{DashDelete(mon.pokemon_species.name)}</a></td>
                    <td>{mon.pokemon_species.url.slice(42,-1)}</td>
                </tr>
                )
        }
    })
    return(
        <nav class="panel">
        <p class="panel-heading ${type}">
            {Upper(props.list[0])}: {props.list[1]}
        </p>
        <table class="table">
            <thead>
                <tr>
                <th><abbr title="Number within Type">#</abbr></th>
                <th>Pokemon</th>
                <th><abbr title="Pokedex ID">ID</abbr></th>
                </tr>
            </thead>
            {items}
        </table>
    </nav>
    )
}

export default List