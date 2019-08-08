import React, {Component} from 'react';

class AddList extends Component {
    state = {
        listName: null
    };

    handleChange = (e) => {
        this.setState({
            listName: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddList(this.state);
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="listName">Add A New List</label>
                <input type="text" className="form-control" onChange={this.handleChange}/>

                <input type="submit" className="btn btn-primary mt-3" value="Add"/>
            </form>
        );
    };
}

export default AddList;