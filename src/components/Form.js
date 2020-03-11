import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /* TODO - set initial state for link name and URL  */

        this.state = {
            name:"",
            URL: ""
        }

    }

    updateNamelabel = (event) => {
        this.setState({
            name: event.target.value
        })

    }

    updateUrlLabel = (event) => {
        this.setState({
            URL: event.target.value
        })
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        this.props.handleSubmit(this.state)

        //reset the form values to be empty
       this.setState({
            name: "",
            URL: ""
        })
            
    }

    render() {

        return(
            <form onSubmit= {this.onFormSubmit} >
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}

                <label for = "name"> Name </label>
                <input 
                type="text"
                    value={this.state.name}
                    onChange={this.updateNamelabel}
                    
                />

                <label for = "URL"> URL </label>
                <input 
                type = "text"
                    value = {this.state.URL}
                    onChange = {this.updateUrlLabel}

                />

                <button type = "submit"> Submit </button> 
            </form>
        )
    
    }
}

export default Form;
