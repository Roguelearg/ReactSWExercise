import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import NavBar from '../components/NavBar';
import './App.css';

class App extends Component {

  constructor()
  {
    super();
    this.state = {
      cardArray: [],
      type: '',
      searchfield: ''
    }
  }

  componentDidMount()
  {
    fetch(`https://swapi.co/api/films`)
      .then(response => response.json())
      .then(users => this.setState({cardArray: users.results, type: 'Films'}));
  }

  onSearchChange = (event) =>
  {
    this.setState({searchfield: event.target.value});
  }

  onNavClick = (event) =>
  {
    fetch(`https://swapi.co/api/${event.target.text.toLowerCase()}`)
      .then(response => response.json())
      .then(users => this.setState({cardArray: users.results, type: event.target.text}));
  }

  render()
  {
    const { cardArray, type, searchfield } = this.state;
    const filteredCardArray = (type ==='Films') ?
      cardArray.filter(card => {
        return card.title.toLowerCase().includes(searchfield.toLowerCase());
      }) :
      cardArray.filter(card => {
        return card.name.toLowerCase().includes(searchfield.toLowerCase());
      })
    // this.setState({type: 'People'});
    // console.log('render', type);
    return !cardArray.length ?
       <h1 className='tc'>Loading</h1> :
       (
        <div className='tc'>
          <h1 className='f1'>Star wars Infos</h1>
          <NavBar clickEvent={this.onNavClick.bind(this)}/>
          <SearchBox searchChange={this.onSearchChange} typeArray={type}/>
          <Scroll>
            <CardList cardArray = {filteredCardArray} typeArray={type}/>
          </Scroll>
        </div>
      );
  }

}

export default App;
