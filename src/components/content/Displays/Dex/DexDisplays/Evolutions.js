import React from "react";
import Upper from "../../helpers/Upper";

const Evolutions=(props)=>{
    const evos=props.evos.map(mon=>{
        return(
        <a className={mon.stage} onClick={()=>{props.onSearchSubmit(mon["speciesName"])}}>
            {Upper(mon["speciesName"])}
            <br></br>
        </a>
        )
    })
    return(
        <React.Fragment>
            {evos}
        </React.Fragment>
    )

}

export default Evolutions