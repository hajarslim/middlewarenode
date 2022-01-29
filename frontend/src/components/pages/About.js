import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'
import { MDBBtn } from "mdbreact";

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loggedin: false,
            resData: ''


        };
    }
    updateUsername = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            username: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.username);
        });

        console.log("New state DIRECTLY after setState:", this.state.username);
        console.log("New state DIRECTLY after setState:", this.state.username);
    }


    updatePassword = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            password: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.password);
        });

        console.log("New state DIRECTLY after setState:", this.state.password);
        console.log("New state DIRECTLY after setState:", this.state.password);
    }

    login = (event) => {

        event.preventDefault();
        // alert("successfully added")
        let loginBody = JSON.stringify(
            {
                "email": this.state.username,
                "password": this.state.password,
            }
        );
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            method: 'POST',
            url: 'http://localhost:3500/api/users/userLogin',
            data: loginBody,
        })
            .then(response => {
                console.log("Arrived to login request")
                if (response.status === 200) {
                    // alert("login successful")
                    // browserHistory.push("/home")
                    this.setState({
                        resData: response.data
                    })
                    console.log("this is resData status " + this.state.resData.messageCode)
                    if (this.state.resData.messageCode === "1000") {
                        this.setState({
                            loggedin: true
                        })
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'User Login Successful !',
                            showConfirmButton: false,
                            timer: 3500
                        })
                    }
                    console.log("this is login status " + this.state.loggedin)



                }
            })
            .then(this.navigateToHome)
            .catch((console.log("ISSUES !")))


    }
    navigateToHome = () => {
        if (this.state.loggedin) {
            console.log("came for navigation")

        }
    }

    render() {
        
        return (
            <div style={{
                backgroundImage: 'url("https://www.bkacontent.com/wp-content/uploads/2020/06/about-us.webp")',
                backgroundSize: "cover", position: "relative", height: "600px",
            }}>
                <div className="card" style={{ opacity: 0.9, borderRadius: 30, position: 'absolute', marginTop: 450, height: 125, width: 800, justifyContent: 'center', marginLeft: 500 }} >
                
                  
                  <h2 className='my-3'>
                    Build skills with courses, certificates, and degrees online
                  </h2>
                  
                   
                        <form style={{ marginLeft: 300, marginTop: 0 }}>
                            <a href="http://localhost:3000/about">< MDBBtn color="blue" style={{ padding: 5 ,fontSize:20}} > Contact now</MDBBtn></a>
                            
                        </form>
                    
                </div>
            </div>
        )
    }
}
