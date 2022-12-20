import React from "react";
import DexHome from "./Displays/Dex/DexHome";
import Init from "./Displays/Init";
import List from "./Displays/List/List"

// i think this is causing double mounting
const Content=(props)=>{
    if(props.display===0){
        console.log('init')
        return(
            <div className="column">
                <Init dexData={props.dexData} onSearchSubmit={props.onSearchSubmit}/>
            </div>
        ) 
    }
    else if(props.display===1){
        console.log('content',props.formsData)
        return(
            <div className="column">
                <DexHome onSearchSubmit={props.onSearchSubmit} forms={props.forms}formsData={props.formsData} formRequest={props.formRequest} update={props.update} dexData={props.dexData}/>
            </div>
        ) 
    }else if(props.display===2){
        return(
            <div className="column">
                <List list={props.list} onSearchSubmit={props.onSearchSubmit}/>
            </div>
        )
    }
}

export default Content