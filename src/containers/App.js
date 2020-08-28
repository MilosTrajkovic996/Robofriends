import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../actions';



class App extends Component{
    constructor(){
        super()
        this.state={

            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange = (event) =>  //uvek koristiti ovako arrow functions a ne obicne funkcije
    {
        this.setState({ searchfield: event.target.value})
   
    }

    render()
    {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
        <div className='tc'>
        <h1 className= 'f1 '>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>

        </div>
        );
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (App);