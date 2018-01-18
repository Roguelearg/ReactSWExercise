import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import NavBar from '../components/NavBar';
import './App.css';

let test = 'Films';
class App extends Component {

  constructor()
  {
    super();
    this.state = {
      cardArray: [],
      category: 'Films',
      searchfield: ''
    }
  }

  componentDidMount()
  {
    console.log('must be second');
    fetch(`https://swapi.co/api/${this.state.category.toLowerCase()}`)
      .then(response => response.json())
      .then(users => this.setState({cardArray: users.results}))
  }

  onSearchChange = (event) =>
  {
    this.setState({searchfield: event.target.value});
  }

  onNavClick = (event) =>
  {
    const category = event.target.text;
     fetch(`https://swapi.co/api/${category.toLowerCase()}`)
       .then(response => response.json())
       .then(users => this.setState({cardArray: users.results, category: category}))
  }

  render()
  {
    const { cardArray, category } = this.state;
    // console.log('render1 : ', category, oldCategory);
    console.log('render', cardArray);
    // const filteredCardArray = (category ==='Films') ?
    //   (
    //     console.log(cardArray, category),
    //     cardArray.filter(card => {
    //     return card.title.toLowerCase().includes(searchfield.toLowerCase());
    //   })) :
    //   (
    //     console.log(cardArray, category),
    //     cardArray.filter(card => {
    //     return card.name.toLowerCase().includes(searchfield.toLowerCase());
    //   }))
    return !cardArray.length ?
      <div className='tc'>
        <h1 className='f1'>Star wars Infos</h1>
        <NavBar clickEvent={this.onNavClick}/>
        {/* <SearchBox searchChange={this.onSearchChange} typeArray={category}/> */}
        <h1 className='tc'>Loading</h1>
      </div> :
       (
        <div className='tc'>
          <h1 className='f1'>Star wars Infos</h1>
          <NavBar clickEvent={this.onNavClick}/>
          {/* <SearchBox searchChange={this.onSearchChange} typeArray={category}/> */}
          <Scroll>
            <CardList cardArray = {cardArray} typeArray={category}/>
          </Scroll>
        </div>
      );
  }

}

export default App;
