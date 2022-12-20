import React from "react";

class Buttons extends React.Component{
    onLeftButtonClick=(e)=>{
        console.log('left click')
        e.preventDefault()

        this.props.onButtonClick(this.props.num-1)
    }
    onRightButtonClick=()=>{
        console.log('right click')
        console.log(this.props.num)
        this.props.onButtonClick(this.props.num+1)
    }
    
    render(props){
        return(
        <div className="panel-block">
            <a>
                <button type="submit" className="button is-link is-outlined" onClick={this.onLeftButtonClick}> 
                    <i className="fa-solid fa-angle-left"></i>
                </button>
            </a>
            <a>
                <button type="submit" className="button is-link is-outlined" onClick={this.onRightButtonClick}> 
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </a>
        </div>)
    }
}
export default Buttons