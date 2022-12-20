import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Buttons from './SearchBar/Buttons'
import Panel from './Panel/Panel'

class SideBar extends React.Component{
    state={term:''}

    onSearchInput=(term)=>{
        console.log(this.state.term)
        this.setState({term:term.toLowerCase().trim()})
    }

    onSubmit=async(e)=>{
        e.preventDefault()
        console.log('search submitted')
        this.props.onSearchSubmit(this.state.term)
    }
    onButtonClick=async(num)=>{
        console.log('click submitted', num)
        this.setState({term:num},()=>{
            this.props.onSearchSubmit(this.state.term)
        })
    }

    componentDidUpdate(){
        console.log('updated')
        console.log(this.state)
    }

    
    render(){
        return(
            <nav className="panel">
                <p className="panel-heading">
                    Explore
                </p>
                <SearchBar onSubmit={this.onSubmit} onSearchInput={this.onSearchInput}/>
                <Buttons num={this.props.num} onButtonClick={this.onButtonClick}/>
                <Panel onPanelClick={this.props.onPanelClick} onButtonClick={this.onButtonClick}/>
            </nav>
            )
    }
}

export default SideBar