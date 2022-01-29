import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
        let loginBody = JSON.stringify(
            {
                "username": this.state.username,
                "password": this.state.password,
            }
        );
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            method: 'POST',
            url: 'http://localhost:3500/api/admins/adminLogin',
            data: loginBody,
        })
            .then(response => {
                console.log("Arrived to login request")
                if (response.status === 200) {
                
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
                            title: 'Admin Login Successful !',
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
        if (this.state.loggedin === true) {
            return (<div class="box"style={{display: 'flex'
            ,height:"300"}}>
                <li className="nav-item"></li>
                    <div>
                        <img src='https://uxwing.com/wp-content/themes/uxwing/download/18-education-school/online-course.png' 
                        height='300' width='350'></img>
                        <button type="button" class="btn btn-primary" href="http://localhost:3000/AddCourse" >Add courses
                        </button> </div>
                        <div>
                            <img src='https://cdn4.iconfinder.com/data/icons/online-course/512/course-information-business-detail-512.png' 
                            height='400' width='350' ></img>
                         <br></br>
                            <a type="button" class="btn btn-primary" 
                            href="http://localhost:3000/courses" >Course Info
                        </a>
                        </div>
                        <div>
                            <img 
                            src='data:image/jpeg;base64,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 ' 
                            height='300' width='350'></img>
                            <a type="button" class="btn btn-primary" 
                            href="http://localhost:3000/userInfo" >Student Info
                        </a>
                            
                       </div>
                       <div>
                           <img src='https://cdn3.iconfinder.com/data/icons/education-glyphs/70/chat__conversation__message__discussion__students-512.png'
                            height='300' width='350' ></img>
                           <a type="button" class="btn btn-primary" 
                            href="http://localhost:3000/messages" >messages of students
                        </a>
                         </div>
            </div>
                ) 
            
                /* <Redirect to='/' /> */
        }

        return (
            
            <div style={{
                backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/79/28/71/240_F_279287163_50ZaXW6BHxCOsDDF9kV5IbK4IrhjXc2T.jpg")',
                backgroundSize: "cover", height: "520px",
            }}>

                <div className="card" style={{ opacity: 0.8, borderRadius: 30, position: 'absolute', marginTop: 50, height: 450, width: 500, justifyContent: 'center', marginLeft: 520, marginRight: 500 }} >
                    <div className="card-body">
                        <form style={{}}>
                            <br />
                            <div style={{ justifyContent: 'center', alignItems: 'center' ,marginLeft:100}}> <h3> Admin Login</h3> </div>

                            <div className="form-group" >
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" onChange={this.updateUsername} required />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={this.updatePassword} required />
                            </div>

                            {/* <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div> */}

                            <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminLogin;
