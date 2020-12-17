import React from 'react';

class EB extends React.Component{
    constructor(){
        super()
        this.state = {
            errorState: false
        }
    }

    // New life-cycle method(hook)
    componentDidCatch(error, info){
        this.setState = {errorState: true}
    }

    render(){
        return (this.state.errorState) 
            ? <h1>Oops, something broke</h1> 
            : this.props.children;
    }
}

export default EB;