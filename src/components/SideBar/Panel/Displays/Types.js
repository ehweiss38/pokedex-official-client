import React,{useState,useEffect} from "react"
    

const refArr=[{cat:"type", type:'normal',icon:"fa-solid fa-star", word:'Normal'},{cat:"type", type:'fighting',icon:"fa-solid fa-hand-fist",word:'Fighting'},
{cat:"type", type:'flying',icon:"fa-solid fa-feather",word:'Flying'},{cat:"type", type:'poison',icon:"fa-solid fa-skull-crossbones",word:'Poison'},
{cat:"type", type:'ground',icon:"fa-solid fa-mountain",word:'Ground'},{cat:"type", type:'rock',icon:"fa-solid fa-hill-rockslide",word:'Rock'},
{cat:"type", type:'bug',icon:"fa-solid fa-bug",word:'Bug'},{cat:"type", type:'ghost',icon:"fa-solid fa-ghost",word:'Ghost'},
{cat:"type", type:'steel',icon:"fa-solid fa-diamond",word:'Steel'},{cat:"type", type:'fire',icon:"fa-solid fa-fire",word:'Fire'},
{cat:"type", type:'water',icon:"fa-solid fa-droplet",word:'Water'},{cat:"type", type:'grass',icon:"fa-solid fa-leaf",word:'Grass'},
{cat:"type", type:'electric',icon:"fa-solid fa-bolt",word:'Electric'},{cat:"type", type:'psychic',icon:"fa-solid fa-brain",word:'Psychic'},
{cat:"type", type:'ice',icon:"fa-solid fa-snowflake",word:'Ice'},{cat:"type", type:'dragon',icon:"fa-solid fa-dragon",word:'Dragon'},
{cat:"type", type:'dark',icon:"fa-solid fa-moon",word:'Dark'},{cat:"type", type:'fairy',icon:"fa-solid fa-wand-magic-sparkles",word:'Fairy'}]

const Types=(props)=>{
    const[activeIndex,setActiveIndex]=useState(null)
    const indexSetter=(index)=>{
        setActiveIndex(index)
    }

    useEffect(()=>{
        console.log('in action');
        setActiveIndex(null)
    },[props.dexData])

    let typeListing=refArr.map((typeObj,index)=>{
        const actStatus=index===activeIndex?"is-active":""
        return(
            <a onClick={()=>{indexSetter(index);props.onPanelClick(typeObj['cat'],typeObj['type'])}} className={"panel-block "+actStatus}>
                <span className="panel-icon">
                    <i className={typeObj['icon']} aria-hidden="true"></i>
                </span>
                {typeObj['word']}
            </a>
        )
    })
    return(
    <React.Fragment>
        {typeListing}
    </React.Fragment>
    )
}

export default Types