import React from "react"
import Upper from "../../helpers/Upper"
import DashDelete from "../../helpers/DashDelete"

const FormDexPage=({formsData})=>{
    console.log(formsData)
    return(
        <div id="info">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Pokemon Name
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        {DashDelete(formsData.data.forms.pokeName)}
                    </div>
                </div>
            </div>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Types
                    </p>
                </header>
                <div class="card-content">
                    <div className="content" dangerouslySetInnerHTML={{__html:formsData.data.forms.types}}>
                    </div>
                </div>
            </div>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Abilities
                    </p>
                </header>
                <div class="card-content">
                    <div class="content" dangerouslySetInnerHTML={{__html:formsData.data.forms.abilities}}>
                    </div>
                </div>
            </div>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Held Item
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        {Upper(formsData.data.forms.heldItem)}
                    </div>
                </div>
            </div>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                        Base Species
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        {Upper(formsData.data.forms.baseSpecies)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormDexPage