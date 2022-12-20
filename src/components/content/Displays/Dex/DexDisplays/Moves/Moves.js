import React from "react";
import axios from 'axios'
import MovesDisplay from './MovesDisplay'

//this is mounting twice which is super annoying, that being said, I am working with it for now


class Moves extends React.Component{
    constructor(props){
        super(props)
        this.state={moves:null}
        this.readyMoves=<div>Loading...</div>
        //if ready moves.length===this.state.moves.data.length
    }

    componentDidMount(){
        console.log('did mount')
        this.loadMore()
    }

    loadMore=async()=>{
        console.log('load more called')
        const movesArr=await axios.get("http://localhost:9000/moves")
        this.setState({moves:movesArr})
    }
    componentDidUpdate(){
        this.readyMoves=this.state.moves.data.map(move=>{
            return(
                <MovesDisplay key={move.name}move={move}/>
            )
        })
    }


    render(){
        let text=this.state.moves&&this.readyMoves.length===this.state.moves.data.length? "All Loaded":"Load More..."
        return(
            <div >
                {this.readyMoves}
                <button onClick={()=>{this.loadMore()}} className="button is-link is-outlined is-fullwidth">
                        {text}
                </button>
            </div>
        )
    }
}

export default Moves