import React from 'react'
import axios from 'axios';
import TodoElem from './TodoElem'
import TodoInput from './TodoInput'
import Grid from '@material-ui/core/Grid';
import {Table,TableHead,TableRow,TableCell,TableBody} from '@material-ui/core'
import "./MainContainer.scss"

class MainContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/todos')
        .then((results) =>{
            console.log(results.data)
            this.setState({todos: results.data})
        })
        .catch((data) => {
        })
    }

    render() {
        return(
            <div className='app-main'>
                <Table className="todo-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>title</TableCell>
                            <TableCell>button</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { this.state.todos.map((item) =>(
                            <TodoElem 
                                id={item.id}
                                title={item.title}
                            />
                        ))}
                    </TableBody>
                </Table>
                <TodoInput />
            </div>
        );
    }
}

export default MainContainer