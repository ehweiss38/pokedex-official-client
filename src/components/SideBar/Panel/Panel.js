import React,{useState} from 'react'
import Home from './Displays/Home'
import Types from './Displays/Types'
import Generations from './Displays/Generations'
import Regions from './Displays/Regions'


const Panel=(props)=>{
    const[activeIndex,setActiveIndex]=useState(0)

    const components=[<Home dexData={props.dexData} onPanelClick={props.onPanelClick}/>, <Types dexData={props.dexData} onPanelClick={props.onPanelClick}/>,
        <Generations dexData={props.dexData} onPanelClick={props.onPanelClick}/>,<Regions dexData={props.dexData} onPanelClick={props.onPanelClick}/>]

    const tabNames=["Home","Types","Generations","Regions","Categories"]


    const display=index=>{
        console.log(index)
        setActiveIndex(index)
        //selectComponent()
    }
    const tabs=tabNames.map((tabName,index)=>{
        const active=index===activeIndex?'is-active':''
        return(
            <a key={index} className={""+active} onClick={()=>{display(index)}}>{tabName}</a>
        )
    })
    return(
        <nav className='Panel'>
            <p className="panel-tabs">
                {tabs}
            </p>
            <div id="sort">
                {components[activeIndex]}
            </div>
            <div className="panel-block">
                <button className="button is-link is-outlined is-fullwidth" onClick={()=>{props.onButtonClick(Math.floor(Math.random()*905))}}>
                    A wild pokemon appeared!
                </button>
            </div>
        </nav>
    )
}

export default Panel

