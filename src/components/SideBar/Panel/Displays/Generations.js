import React,{useState} from 'react'

let refArr=['Generation I','Generation II','Generation III','Generation IV','Generation V','Generation VI','Generation VII','Generation VIII']

const Generations=(props)=>{

    const[activeIndex,setActiveIndex]=useState(null)
    const indexSetter=(index)=>{
        setActiveIndex(index)
    }

    let genListing=refArr.map((gen,index)=>{
        const actStatus=index===activeIndex?"is-active":""
        return(
            <a onClick={()=>{indexSetter(index);props.onPanelClick('generation',index+1)}} className={"panel-block "+actStatus}>
                <span className="panel-icon">
                    <i className="fa-solid fa-star" aria-hidden="true"></i>
                </span>
                {gen}
            </a>
        )
    })
    return(
    <React.Fragment>
        {genListing}
    </React.Fragment>
    )
}

export default Generations