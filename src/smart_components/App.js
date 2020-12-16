import React, {Component} from 'react';
import './App.css';
import SearchBar from '../pure_components/SearchBar';
import CL from '../pure_components/CardList';
import Scroll from '../pure_components/Scroll'

class app extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchedName: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({
            searchedName: e.target.value
        })
    }

    // Forcing the load-bar to first render and then my robo people
    // Reacts lifecycle hook - Mount

    componentDidMount(){
        setTimeout(() => {

        // Ajax call using the Fetch API to my personal github repo (containing a JSON file)
        // RAW JSON file link from my github repo

        fetch('https://raw.githubusercontent.com/StuartDaniells/JSON-placeholders/main/JSON_placeholder.json')
            .then(responseData => responseData.json())
            .then(data => this.setState({robots: data}))
            .catch((error) => console.log('There seems to be an error, which is -', error))
        }, 3200);
    }

    // After Fetch API is used, the Update - Life cycle hook methods get run [once of which is render()]

    render(){
        let filteredList = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchedName.toLowerCase())
        })

        // Ternary operator
        
        return !this.state.robots.length // same as -> this.state.robots.length === 0
        // True
        ?  (
            <div className="container">
                <div className="loading"> </div>
            </div>
            )
        
        // False 
        :  (
            <div className = 'tc'>
                <h1 className="f1">Robot &nbsp; People</h1>
                <br/>
                <SearchBar searchChanged={this.onSearchChange} />
                <hr/>
                <Scroll>
                    <CL robo={filteredList}/>
                </Scroll>
            </div>
            )
    }
}

export default app;