import React, {Component} from 'react';
import ToDoList from './todolist';
import AddList from './addlist';

class HomeContent extends Component {
    state = {
        lists: [
            { id: 1, listName: 'Do One'},
            { id: 2, listName: 'Do Two'},
            { id: 3, listName: 'Do Three'}
        ]
    }

    render(){
        const addList = (list) => {
            list.id = (this.state.lists.length) + 1;
            let lists = [...this.state.lists,list];
            this.setState({
                lists: lists
            })
        }

        return(
            <div className="home-content">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-8">
                            <h2>My To Do List</h2>
                        </div>
                        <div className="col-6">
                            <table className="table mb-5">
                                <tbody>
                                    <ToDoList lists={this.state.lists}/>
                                </tbody>    
                            </table>
                            <AddList AddList={addList} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeContent;