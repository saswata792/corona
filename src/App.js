import React,{Component} from 'react'
import SearchField from './searchField.js'
import Card from './Card.js'
import './index.css'

class App extends Component{
  constructor(){
          super()
      this.state={
      country_data:[],
      
      searchField:'',
      world_data: [],
    }
  }
  async componentDidMount(){
  const response= await fetch('https://coronavirus-19-api.herokuapp.com/all')
  const data=await response.json()
  this.setState({ world_data: data});
  const responsed=await fetch('https://coronavirus-19-api.herokuapp.com/countries/india')
  const datas=await responsed.json()
  this.setState({country_data: datas });
  }
  onSearchChange = (event)=>{ 
    this.setState({searchField: event.target.value})
  }
  onEnter = async (event) => {
    if(event.key==='Enter')
    {

      const responses=await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${this.state.searchField}`)
      const dat=await responses.json()
      this.setState({country_data: dat});
    }
  } 
  render(){
    return(
      <div>
        <div className="box">
          <h1>GLOBAL</h1>
          <p>Cases:{this.state.world_data.cases}</p>
          <p>Recovered:{this.state.world_data.recovered}</p>
          <p>Deaths:{this.state.world_data.deaths}</p>
        </div>
       <SearchField onSearch={this.onSearchChange} onEnter={this.onEnter}/>
        <div className="box">
         
          <Card data={this.state.country_data}/>
        </div>

      </div>

      );
  }

}
export default App;
