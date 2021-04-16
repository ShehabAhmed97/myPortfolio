import React from 'react'
import "./contacts.css"
import Form from "react-bootstrap/Form" 
import Button from "react-bootstrap/Button" 
import "react-bootstrap" 
import Axios from 'axios';
class Contacts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            message:"",
            disabled:false,
            emailSent:null
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

        handleChange(event){
            const name = event.target.name
            this.setState({
                [name]: event.target.value
            })
        }
        handleSubmit(event){
            event.preventDefault();

            this.setState({disabled:true})
            
            Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
        }

    render (){
        return( 
        <div className="contact-container">
            <h1>Let's CONTACT</h1>
            <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" id="fullName" placeholder="Enter full name" value={this.state.name} onChange={this.handleChange} name="name" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control id="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} name="email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>message</Form.Label>
                <Form.Control id="message" as="textarea" rows="3" placeholder="message" value={this.state.message} onChange={this.handleChange} name="message" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={this.state.disabled}>
                send
            </Button>
            </Form>
                {this.state.emailSent===true? <p style={{color:"green"}}>your email has been sent</p>:null}
                {this.state.emailSent===false? <p style={{color:"red"}}>your email hasn't been sent</p>:null}
        </div>
        )
    }
    
}

export default Contacts
