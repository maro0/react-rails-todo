import React from 'react';
import {Box,Input,Button} from '@material-ui/core';

export default class InputTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        const add_todo_url=""
        
        return (
            <Box>
                <form action="/add" method="post">
                    <Input type="text" name="todo_title"></Input>
                    <Button type="submit">追加</Button>
                </form>
            </Box>
        );
    }
}