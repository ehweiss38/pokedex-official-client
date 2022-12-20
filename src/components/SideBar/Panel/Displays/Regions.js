import React,{useState} from 'react'

const refArr=['Kanto', 'Johto','Hoenn','Sinnoh','Unova','Kalos','Alola','Galar','Hisui']

const Regions=(props)=>{

    const[activeIndex,setActiveIndex]=useState(null)
    const indexSetter=(index)=>{
        setActiveIndex(index)
    }

    const regDisplay=refArr.map((region,index)=>{
        const actStatus=index===activeIndex?"is-active":""
        return(
        <a onClick={()=>{indexSetter(index);props.onPanelClick('region',index+1)}} class={"panel-block " +actStatus}>
            <span class="panel-icon">
                <i class="fa-solid fa-star" aria-hidden="true"></i>
            </span>
            {region}
        </a>
        )
    })

    return(
        <React.Fragment>
            {regDisplay}
        </React.Fragment>
    )
}

export default Regions

