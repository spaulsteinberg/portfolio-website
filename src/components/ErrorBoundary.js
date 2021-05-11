import React, {Component} from 'react';

//error boundaries are higher order components which wrap a component to handle any errors a component might throw
// only cover the components they are wrapped around
class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true})
    }
    render(){
        return this.state.hasError
             ? <h1 className="text-danger text-center">Something went wrong! Please reload the application.</h1>
             : this.props.children;
    }
}

export default ErrorBoundary;