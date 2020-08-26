import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {TableRow,TableCell} from '@material-ui/core'
import axios from 'axios';
import "./TodoElem.scss"

export default class TodoElem extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(e){
        e.preventDefault();
        console.log(this.props);
        axios.delete("http://localhost:3001/todos/" + this.props.id,{
            // id: this.props.id
        })
        .then((response) =>{
            this.props.setTodos()
        })
    }

    render(){
        const todo = this.props;
        return (
            <TableRow >
                <TableCell>{todo.id}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell>
                    <IconButton aria-label="delete" onClick={this.deleteTodo}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    }
}
