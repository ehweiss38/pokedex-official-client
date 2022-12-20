import React,{useState, useEffect} from "react";

const DexImages=(props)=>{
    const [shiny,setShiny]=useState(false)
    const changeSprite=(vers)=>{setShiny(vers)}
    
    useEffect(()=>{
        if(shiny){
            setShiny(!shiny)
        }
    },[props.dexData,props.formsData])
    

    let placeholder
    console.log('props', props)
    if(props.formsData){
        console.log('forms data')
        const {game}=props.formsData.data.forms
        placeholder=game
    }else{
        const {game}=props.dexData
        placeholder=game
    }
    const source=!shiny? placeholder.sprites.default:placeholder.sprites.shiny
    const alt=!shiny? "Default Sprite":"Shiny Sprite"
    const desc=!shiny? "Regular":"Shiny"
    return(
        <div id="imageDisplay"className="level">
            <div className="card column is-one-half level-item">
                <div className="card-image">
                    <figure className="image is-2by2">
                        <img style={{width:300,height:300}} src={source} alt={alt}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <button onClick={()=>{changeSprite(!shiny)}}><i class="fa-solid fa-wand-magic-sparkles"></i></button>
                        {desc}
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default DexImages