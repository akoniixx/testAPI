import React, { Component } from "react"
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class InputUser extends Component {
    state = {
        username: '',
        password: '',
        remember: 0,
        checked: false
    }
    
    usernamehandleChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    passwoedhandleChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    rememberhandleChange = event => {
        this.setState({ remember: this.state.checked === false ? 1 : 0 })
        this.setState({
            checked: event.target.checked
        })    
       
        
    }
    
   

    handleSubmit = event => {
        
        event.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
            remember: this.state.remember
        }
        console.log(user)
        axios.post(`https://substock.gethomestay.com/login/`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            }) 
    }
    render() {
        
        console.log('this is check',this.state.checked)
        console.log('this is re:',this.state.remember) 

        return (
            
            <Form onSubmit={this.handleSubmit}>
            
                <FormGroup row>
                    <Label>username</Label>
                    <Col sm={10}>
                        <Input type="username" name="username" onChange={this.usernamehandleChange} />
                    </Col>
                </FormGroup >
                <FormGroup row>
                    <Label>password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" onChange={this.passwoedhandleChange} />
                    </Col>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" checked={this.state.checked} onChange={this.rememberhandleChange} />{' '}
                        Remembar?
                    </Label>
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}
export default InputUser