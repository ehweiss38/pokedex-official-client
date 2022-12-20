import React from "react";

import DashDelete from "../../helpers/DashDelete";

//I think i want App to handle the request so everything can be unified
const FormsTabs=(props)=>{
    return(
        <li id="pmonTab" class={""+props.active}>
            <a  onClick={()=>{props.tabSelect(props.index,props.form.num)}}>
                <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                <span>{DashDelete(props.form.name)}</span>
            </a>
        </li>
    )
}

export default FormsTabs