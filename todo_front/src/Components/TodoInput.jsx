import React from 'react';
import {Box,Input,Button} from '@material-ui/core';
import update from 'react-addons-update' 
import axios from 'axios';
import SelectInput from '@material-ui/core/Select/SelectInput';



export default class InputTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
        };
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('http://localhost:3001/todos',{
            title: this.state.title
        })
        .then((response) =>{
            this.props.setTodos()
        })
    }

    handleInputValue = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render(){
        const title = this.state.title
        
        return (
            <Box>
                <form onSubmit = {this.handleSubmit}>
                    <Input type="text" name="title" value={title} onChange={this.handleInputValue}></Input>
                    <Button type="submit">追加</Button>
                </form>
            </Box>
        );
    }
}