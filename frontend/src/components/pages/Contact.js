import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            phone: '',
            email: '',
            msg: '',

            msgRes: '',

        };
    }
    updateFullname = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            fullname: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.fullname);
        });

        console.log("New state DIRECTLY after setState:", this.state.fullname);

    }

    updatePhone = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            phone: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.phone);
        });

        console.log("New state DIRECTLY after setState:", this.state.phone);
        console.log("New state DIRECTLY after setState:", this.state.phone);
    }

    updateEmail = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            email: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.email);
        });

        console.log("New state DIRECTLY after setState:", this.state.email);
        console.log("New state DIRECTLY after setState:", this.state.email);
    }
    updateMsg = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            msg: parseInt(event.target.value)
        }, () => {
            console.log("New state in ASYNC callback:", this.state.msg);
        });

        console.log("New state DIRECTLY after setState:", this.state.msg);
        console.log("New state DIRECTLY after setState:", this.state.msg);
    }


    addNewMsg = (event) => {
        if ((this.state.fullname === "") || (this.state.phone === "") || (this.state.email === "") || (this.state.msg === "")) {
            Swal.fire({
                position: 'middle',
                icon: 'error',
                title: 'Oops...',
                text: 'Check your inputs again!',
                timer: 1500
            })

        }

        event.preventDefault();
        let msgBody = JSON.stringify(
            {
                "fullname": this.state.fullname,
                "phone": this.state.phone,
                "email": this.state.email,
                "msg": this.state.msg,

            }
        );
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },

            method: 'POST',
            url: 'http://localhost:3500/api/admins/createMessage',
            data: msgBody,

        })
            .then(response => {
                console.log("Arrived to send request")
                this.setState({
                    msgRes: response.data
                })

            })
            .then(() => {
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Message Added Successfully',
                    showConfirmButton: false,
                    timer: 3500
                })
            })

            .catch((console.log("ISSUES !")))

    }


    render() {
        return (
            <div style={{ backgroundImage: 'url("https://www.wilsonsecurity.com.au/siteassets/security-stock-images/contact-us.jpg")', backgroundSize: "cover", position: "relative", height: "580px" }}>
                <div className="card" style={{ opacity: 0.9, borderRadius: 30, position: 'absolute', marginTop: 45, height: 500, width: 500, justifyContent: 'center', marginLeft: 540 }} >
                    <div className="card-body">
                        <form style={{ marginLeft: 50 }}>
                            <h2 style={{ color: 'black', marginLeft:'50px' }}>Contact Us</h2>
                            <br />
                                <div className="form-row">
                                <div className="col-md-10 mb-3">
                                    <label htmlFor="inputEmail4">Full name</label>
                                    <input type="email" className="form-control" id="validationDefault01" placeholder="Full Name"
                                        onChange={this.updateFullname} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-10 mb-3">
                                    <label htmlFor="inputEmail4">Phone number</label>
                                    <input type="email" className="form-control" id="validationDefault02" placeholder="phone"
                                        onChange={this.updatePhone} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-10 mb-3">
                                    <label htmlFor="inputEmail4">Email address</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="email"
                                        onChange={this.updateEmail} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-10 mb-3">
                                    <label htmlFor="validationDefault04">Message</label>
                                    <input type="text" className="form-control" id="validationDefault04" placeholder="msg" required
                                        onChange={this.updateMsg} />
                                </div>

                            </div>
                            <Link to = '/messagesInfo'><button onClick={this.addNewMsg} className="btn btn-primary" type="submit" style={{marginLeft:'100px'}}>Submit</button></Link>
                        </form>
                    </div>

                </div>
                <br/>
                <br/>
                <br/>
            </div>
            
        )
    }
}
export default Contact;