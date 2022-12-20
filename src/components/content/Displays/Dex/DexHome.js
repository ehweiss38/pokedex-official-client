import React from "react";
import DexTabs from "./DexTabs";
import DexImages from "./DexImages"
import DexForms from "./Forms/DexForms";
import Dex from "./DexDisplays/Dex";
import Stats from "./DexDisplays/Stats";
import Moves from "./DexDisplays/Moves/Moves"
import FormDexPage from "./Forms/FormDexPage";

class DexHome extends React.Component{
    constructor(props){
        super(props)
        this.state={selection:'dex'}
        this.update=null
    }

    onTabClick=(num)=>{
        console.log('click',num)
        if(this.state.selection!==num){
        this.setState({selection:num})
        }
    }

    componentDidUpdate(){
        console.log('update')
        if(this.update!==this.props.update){
            this.update=this.props.update
            this.setState({selection:'dex'})
        }
        console.log('props dh',this.props)
        return
    }

    componentDidMount(){
        console.log('Mounted')
    }

    render(){
        //terrible system
        console.log("data",this.state)
        if(this.state.selection===1){
            console.log('dexData',this.props.dexData)
                return(
                    <article className="columns" id="infoCard">
                        <div className='column'>
                            <DexForms formRequest={this.props.formRequest} dexData={this.props.dexData}/>
                            <DexImages dexData={this.props.dexData} formsData={this.props.formsData}/>
                            <DexTabs onTabClick={this.onTabClick} dexData={this.props.dexData} formsData={this.props.formsData}/>
                            <Stats dexData={this.props.dexData} formsData={this.props.formsData}/>
                        </div>
                    </article>
            )
            }
        else if(this.state.selection===2){
            return(
                <article className="columns" id="infoCard">
                    <div className='column'>
                        <DexForms formRequest={this.props.formRequest} dexData={this.props.dexData}/>
                        <DexImages dexData={this.props.dexData} formsData={this.props.formsData}/>
                        <DexTabs onTabClick={this.onTabClick} dexData={this.props.dexData} formsData={this.props.formsData}/>
                        <Moves dexData={this.props.dexData} formsData={this.props.formsData}/>
                    </div>
                </article>
            )
        }else{
            //major error here with dex form page
            if(this.props.forms){
                console.log('123',this.props.dexData,this.props.dexData)
                return(
                    <article className="columns" id="infoCard">
                        <div className='column'>
                            <DexForms formRequest={this.props.formRequest} dexData={this.props.dexData}/>
                            <DexImages formsData={this.props.formsData}/>
                            <DexTabs onTabClick={this.onTabClick} dexData={this.props.dexData} formsData={this.props.formsData}/>
                            <FormDexPage dexData={this.props.dexData.data} formsData={this.props.formsData}/>
                        </div>
                    </article>
            )
            }else{
                return(
                    <article className="columns" id="infoCard">
                        <div className='column'>
                            <DexForms formRequest={this.props.formRequest} dexData={this.props.dexData}/>
                            <DexImages dexData={this.props.dexData}/>
                            <DexTabs onTabClick={this.onTabClick} dexData={this.props.dexData} formsData={this.props.formsData}/>
                            <Dex onSearchSubmit={this.props.onSearchSubmit} dexData={this.props.dexData}/>
                        </div>
                    </article>
                )
            }
        }
    }
}

export default DexHome