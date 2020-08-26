import React from 'react';
import { Button,IconButton,Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {TableRow,TableCell} from '@material-ui/core'
import "./TodoElem.scss"

export default class TodoElem extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        const todo = this.props;
        return (
            <TableRow >
                <TableCell>{todo.id}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    }
}
