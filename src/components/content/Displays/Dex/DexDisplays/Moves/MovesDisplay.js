import React from "react";
import TypeIcons from './icons/TypeIcons'

class MovesDisplay extends React.Component{
    state={display:'default'}

    onHover=()=>{
        if(this.state.display==='default'){
            this.setState({display:'hover'})
        }
        if(this.state.display==='hover'){
            this.setState({display:'default'})
        }
    }

    render(){
        const{move}=this.props
        if(this.state.display==='default'){
            return(
                <div key={move.name} className="card" onMouseEnter={this.onHover}>
                    <header className={`card-header ${move.stats.type}`}>
                        <p className="card-header-title">
                            {move.name}
                        </p>
                        {TypeIcons[move.stats.type]}
                    </header>
                    <div className="card-content">
                        <div className="content">
                            Type:{move.stats.type} <br/>
                            Damage:{move.stats.power}&nbsp;&nbsp;&nbsp;&nbsp;Damage Type:{move.stats.damageType}<br/>
                            PP:{move.stats.pp}&nbsp;&nbsp;&nbsp;&nbsp;Accuracy:{move.stats.accuracy}
                        </div>
                    </div>
                </div>
            )
        }
        else if(this.state.display==="hover"){
            return(
            <div key={move.name} className="card" onMouseLeave={this.onHover}>
                <header className={`card-header ${move.stats.type}`}>
                    <p className="card-header-title">
                        {move.name}
                    </p>
                    {TypeIcons[move.stats.type]}
                </header>
                <div className="card-content">
                    <div className="content">
                        Can Learn At: Level {move.level} <br/>
                        Learn Method:{move.method}<br/>
                        Description:{move.stats.effect}
                    </div>
                </div>
            </div>)
        }
    }
//unsure about how to get type
}

export default MovesDisplay