import './App.css';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import React, {Component} from 'react';
import Scroll from '../components/Scroll'

class App extends Component{

  constructor(){
    super();
    this.state={robots:[],
      searchField:""}
  }

  componentDidMount() {
    fetch('http://localhost:8080/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange=(event)=>{
    console.log(event.target.value);
    this.setState({searchField:event.target.value})
  }

  render () {
    console.log("render");
    console.log(this.state.searchField);
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    return!filteredRobots.length ? 
    (<div className='tc'>        
     <h1 className='f1'>Robo Friends</h1>
     <SearchBox  searchChange={this.onSearchChange} />
    <h1> Not found</h1>
    </div>) 
    :
     (<div className='tc'>
        <h1 className='f1'>Robo Friends</h1>
        <SearchBox  searchChange={this.onSearchChange} />
        <Scroll> <CardList robots={filteredRobots} /> </Scroll>
      </div> 
  );
}
}

export default App;
