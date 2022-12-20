import React, {useState} from "react";
import Upper from "../../helpers/Upper";
import DashDelete from "../../helpers/DashDelete";
import Evolutions from "./Evolutions"

const Dex=(props)=>{
    const[i, setI]=useState(Math.floor(Math.random()*props.dexData.lore.description.length))
    const callI=()=>{
        console.log(i)
        if(i+1>=props.dexData.lore.description.length){
            setI(0)
        }else{
            setI(i+1)
        }
    }
    return(
    <div id="info">
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Pokemon Name
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    {Upper(props.dexData.lore.pokeName)}
                </div>
            </div>
        </div>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Generation
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    {DashDelete(props.dexData.lore.generation)}
                </div>
            </div>
        </div>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Habitat
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    {Upper(props.dexData.lore.habitat)}
                </div>
            </div>
        </div>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Type
                </p>
            </header>
            <div className="card-content">
                <div className="content" dangerouslySetInnerHTML={{__html:props.dexData.game.types}}>
                </div>
            </div>
        </div>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Abilities
                </p>
            </header>
            <div className="card-content">
                <div className="content" dangerouslySetInnerHTML={{__html:props.dexData.game.abilities}}>
                </div>
            </div>
        </div>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Evolution Chain
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <Evolutions onSearchSubmit={props.onSearchSubmit} evos={props.dexData.lore.evolutions}/>
                </div>
            </div>
        </div>
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Pokedex Entry
                </p>
            </header>
            <div className="card-content">
                <div className="content" style={{cursor:'pointer'}} onClick={()=>{callI()}}>
                    {props.dexData.lore.description[i].flavor_text}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dex