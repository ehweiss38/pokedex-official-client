import React from 'react'
import './App.css';
import SideBar from './components/SideBar/SideBar';
import axios from 'axios'
import Content from './components/content/Content'
import "./css/style.css"

//forms and forms data can be combined

//key errors: Init loading null; Description error

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { dexData: "", display:0, num:0, forms:false,formsData:null, list:null};
    this.update=false
    this.category=null
    this.val=null
}

  async callAPI() {
      const init=await axios.get("http://localhost:9000/")
      console.log('api called',init)
      this.setState({dexData:init,display:0, num:0})
  }
  onSearchSubmit=async(term)=>{
    console.log('new search')
    console.log('term', term)
    const response= await axios.get(`http://localhost:9000/${term}/entry`)
    this.setState({dexData:response.data, num:response.data.lore.pokeId, display:1,formsData:null,list:null,forms:false},()=>{
      console.log(this.state.dexData.lore.pokeId)
    })

  }
  componentDidMount(){
      this.callAPI();
  }
  componentDidUpdate(){
    this.update=!this.update
    console.log('did update',this.state)
  }
  formRequest=async (val)=>{
    console.log('form req',val)
    if(val==this.state.dexData.lore.pokeId){
      this.onSearchSubmit(val)
      return
    }
    const response= await axios.get(`http://localhost:9000/${val}/form`)
    console.log('response',response)
    this.setState({formsData:response,forms:true})
  }
  
  onPanelClick=async(category,val)=>{
    this.category=category
    this.val=val
    const list=await axios.get(`http://localhost:9000/side/${category}/${val}`)
    this.setState({display:2,list:list})
    }


  render(){
    return(
      <div id="body" style={{ backgroundImage: `url(/tile_background.png)` }}>
        <div id="header">
            <div id="red-bar">
              <img onClick={()=>{this.callAPI()}} style={{cursor:'pointer'}} id="logo" src='/logo.png' alt="pokemon logo"/>
            </div>
            <div id="grey-bar">
                <span className="icon">
                  <a>
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
                <span className="icon">
                    <a>
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                </span>
                <span className="icon">
                  <a>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </span>
            </div>
        </div>
        
        <div className="columns">
            <div className="column is-one-quarter">
                <SideBar dexData={this.state.dexData} num={this.state.num} onSearchSubmit={this.onSearchSubmit} onPanelClick={this.onPanelClick}/>
            </div>
            <div id="display" className="column" >
              <div className='box'>
                <Content onSearchSubmit={this.onSearchSubmit} update={this.update}dexData={this.state.dexData} display={this.state.display} formRequest={this.formRequest} formsData={this.state.formsData} list={[this.category,this.val,this.state.list]} forms={this.state.forms}/>
              </div>
            </div>
        </div>
    </div>
      //<p className="App-intro">{this.state.apiResponse}</p>
    )

  }
}
//consider reducing props passed to content

export default App
