import React from "react";

const DashDelete=(term)=>{
    let loc
    for(let i=0;i<term.length;i++){
        if(term[i]==='-'){
            loc=i
        }
    }
    let copy=term.split('')
    copy[0]=copy[0].toUpperCase()
    if(loc){
        copy[loc]=" "
        copy[loc+1]=copy[loc+1].toUpperCase()
    }
    return copy.join('')

}

export default DashDelete