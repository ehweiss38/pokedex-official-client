import React, {useState,useEffect} from "react";
import FormsTabs from "./FormsTabs";

const DexForms=(props)=>{
    const [activeIndex,setActiveIndex]=useState(0)
    const tabSelect=(index,num)=>{
        console.log('tab select',num)
        props.formRequest(num)
        setActiveIndex(index)
    }

    useEffect(()=>{
        setActiveIndex(0)
    },[props.dexData])

    const pokeForms=props.dexData.lore.forms.map((form,index)=>{
        const active=index===activeIndex? "is-active":""
        return <FormsTabs active={active} index={index} tabSelect={tabSelect} form={form}/>
    })
    return(
        <div id="dexTabs formsTabs" className="tabs is-boxed">
            <ul>
                {pokeForms}
            </ul>
        </div>
    )
}

export default DexForms