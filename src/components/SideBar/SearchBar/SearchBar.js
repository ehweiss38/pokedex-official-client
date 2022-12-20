import React from "react";
import Buttons from './Buttons';


class SearchBar extends React.Component{

    render(props){
        return(
            <div className="panel-block">
                <form method="POST" action="/" onSubmit={(e)=>{this.props.onSubmit(e)}}>
                    <p className="control has-icons-left">
                        <input className="input" name="num"type="text" placeholder="Search" value={this.props.term}
                            onChange={(e)=>{this.props.onSearchInput(e.target.value)}}/>
                        <span className="icon is-left">
                            <i className="fas fa-search" aria-hidden="true"></i>
                        </span>
                    </p>
                </form>
            </div>
        )
    }
}

export default SearchBar

//</input>${buttons(num)}