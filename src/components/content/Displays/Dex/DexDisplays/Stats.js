import React from "react";

const Stats=(props)=>{
    console.log('stats', props)
    let placeholder
    if (props.formsData){
        const {game}=props.formsData.data.forms
        placeholder=game
    }else{
        const {game}=props.dexData
        placeholder=game
    }
    return(
        <div id="info">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Base Stat Total
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {placeholder.stats['total']}
                    </div>
                </div>
            </div>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        HP
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {placeholder.stats['hp']}
                    </div>
                </div>
            </div>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Attack
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {placeholder.stats['attack']}
                    </div>
                </div>
            </div>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Special Attack
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {placeholder.stats['special-attack']}
                    </div>
                </div>
            </div>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Defense
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {placeholder.stats['defense']}
                    </div>
                </div>
            </div> 
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Special Defense
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {placeholder.stats['special-defense']}
                    </div>
                </div>
            </div>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Speed
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        {placeholder.stats['speed']}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats