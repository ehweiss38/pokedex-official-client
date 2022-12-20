import React,{useState,useEffect} from "react";


const DexTabs=(props)=>{
    const[activeIndex,setActiveIndex]=useState(0)

   // const update=null

    const indexSet=(index)=>{
        setActiveIndex(index)
        props.onTabClick(index)
    }
    useEffect(()=>{
        console.log('tabs updated')
        setActiveIndex(0)
    },[props.dexData, props.formsData])
    
    const tabNames=['Pokédex','Stats','Moves']
    const icons=['fa-book-atlas','fa-calculator','fa-dumbbell']
    const tabs=tabNames.map((tabName,index)=>{
        const active=index===activeIndex? "is-active":""
        return(
            <li id="tab" className={""+active}>
                <a  onClick={()=>indexSet(index)}>
                    <span className="icon is-small"><i className={"fa-solid"+icons[index]} aria-hidden="true"></i></span>
                    <span style={{marginLeft:-12,marginRight:10}}>{tabName}</span>
                </a>
            </li>
        )
    })

    return(
        <div id="dexTabs" className="tabs is-boxed">
            <ul>
                {tabs}
            </ul>
        </div>
    )
}

export default DexTabs