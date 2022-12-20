import React from "react";
import DashDelete from "./helpers/DashDelete";

class Init extends React.Component{
    state={tileIndex:0}

    leftClick=()=>{
        console.log('left')
        let val=this.state.tileIndex===0?8:this.state.tileIndex-4
        this.setState({tileIndex:val})
    }
    rightClick=()=>{
        let val=this.state.tileIndex===8?0:this.state.tileIndex+4
        this.setState({tileIndex:val})
    }
    componentDidUpdate(){
        console.log(this.state.tileIndex,this.state.tileIndex+4)
    }

    render(){
        let tiles
        if(this.props.dexData.data){
            tiles=this.props.dexData.data.map(pokemon=>{
                return(
                    <div key={pokemon.pokeId} id="tileChild"className="tile is-parent">
                        <article className="tile is-child box">
                            <a onClick={()=>this.props.onSearchSubmit(pokemon.pokeId)}>
                                <p className="subtitle">{DashDelete(pokemon.name)}</p>
                                <figure id="clickable0"  className="image is-4by3"/>
                                    <img src={pokemon.sprite} style={{width:150, height:150, marginTop:-50,marginBottom:50}}/>
                            </a>
                        </article>
                    </div>
                )
            })
        }else{
            tiles=[<div></div>]
        }
        return(
            <div id="tileBox" className="tile is-ancestor" >
                <button type="submit" className="button is-link is-outlined" onClick={()=>{this.leftClick()}}> 
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                {tiles.splice(this.state.tileIndex,this.state.tileIndex+4)}
                <button type="submit" className="button is-link is-outlined" onClick={()=>{this.rightClick()}}> 
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
            )
    }
}


export default Init