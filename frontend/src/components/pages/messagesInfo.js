import React, { Component } from 'react'
import axios from 'axios';
import { MdAccountCircle } from "react-icons/md";
import Modal from 'react-modal'
import Swal from 'sweetalert2'
import { wait } from '@testing-library/react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MdLanguage } from "react-icons/md";
import { SiCodefactor } from "react-icons/si";
import { CgCalendarDates } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";



function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
class MessagesInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgDetails: [],

            searchKey: "",
            searchResult: "",


            currentMsgName: "",

            showModal: false,

            fullname: '',
            phone: '',
            email: '',
            msg: '',

            msgRes: '',

            upfullname: '',
            upphone: '',
            upemail: '',
            upmsg: '',

            currentMsgID: '',
            refresh: false

        };
    }
    componentDidMount() {
        this.loadData();
    }


    loadData = () => {


        let baseURL = "http://localhost:3500/api/admins/getAllMessages";
        axios({
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },


            method: 'GET',
            url: baseURL,


        })
            .then(response => {
                this.setState({
                    msgDetails: response.data
                })
                console.log("success")
                console.log(this.state.msgDetails)
                var len = this.state.msgDetails.length;

                console.log(len + "this is the lenth")

            })
        //setting the auto refresh time as every 40 secs
        //.then(setInterval(this.loadData, 40000))

    }


    deleteMsg = (_id) => {
        console.log("arrived to delete")
        console.log(_id + " this is id")

        let baseURL = "http://localhost:3500/api/admins/deletMsg/" + _id;

        axios({


            method: 'DELETE',
            url: baseURL,


        })

            .then(response => {
                console.log(response.status)
                if (response.status === 200) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Message deleted successfully',
                        showConfirmButton: false,
                        timer: 5000
                    })

                }

            }).then(this.doFrefresh)

    }
    doFrefresh() {
        sleep(2000);
        window.location.reload(false)
    }
    captureInput = event => {
        event.preventDefault()
        console.log(event.target.value)
        var val = event.target.value
        console.log(val + "this is the value retrived")
        this.setState({
            searchKey: event.target.value
        }, () => {
            console.log("New state in ASYNC callback:", this.state.searchKey);
        });

        console.log("New state DIRECTLY after setState:", this.state.searchKey);
        console.log("New state DIRECTLY after setState:", this.state.searchKey);
    }

    go = (fullname, phone, email, msg) => {
        this.setState({
            upfullname: fullname,
            upphone: phone,
            upemail: email,
            upmsg: msg,

        })

    }

    render() {

        return (
            <div style={{ backgroundImage: 'url("https://www.wilsonsecurity.com.au/siteassets/security-stock-images/contact-us.jpg")', backgroundSize: "cover", position: "relative", height: "800px" }}>
                <div style={{ marginLeft: 50, marginRight: 50, marginBottom: 200, }}>
                    <br />
                    <h2 style={{ color: "black", fontWeight: 'bold ' }}>Received messages </h2>
                    <br></br>

                    <table className="table table-light" style={{ height: 600, width: "100%", overflow: "auto", display: "block", opacity: 0.8 }}>

                        <thead>

                        </thead>
                        <tbody style={{ opacity: 1 }}>
                            {this.state.msgDetails.map(msg =>

                                <tr style={{ backgroundColor: this.state.currentMsgName === msg.fullname ? '#22aeb5' : '' }} >

                                    {/* MODA for update package-------------------------------------------------------------------------------------------------------------------------------- */}
                                    <Modal isOpen={this.state.showModal}
                                        style={{
                                            overlay: {
                                                position: 'fixed',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                            },
                                            content: {
                                                position: 'absolute',
                                                top: '70px',
                                                left: '540px',
                                                right: '500px',
                                                bottom: '70px',
                                                border: '1px solid #ccc',
                                                background: '#fff',
                                                overflow: 'auto',
                                                borderRadius: '30px',
                                                outline: '5px',
                                                padding: '20px'
                                            }
                                        }}
                                    >
                                        <GiCancel style={{ marginLeft: 390 }} size={30} onClick={() => this.setState({ showModal: false })} />
                                        <form style={{ marginBottom: -10, marginLeft: 10, marginTop: -60, marginRight: 10}}>
                                            <br />
                                            
                                            <br />
                                            
                                            <div style={{marginLeft:30, marginTop: 20}}>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="validationDefault02">Full Name</label>
                                                    <input type="text" className="form-control" id="validationDefault02" placeholder={this.state.upfullname} required
                                                        onChange={this.fullname} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="validationDefault02">Phone Number</label>
                                                    <input type="text" className="form-control" id="validationDefault02" placeholder={this.state.upphone} required
                                                        onChange={this.upphone} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="validationDefault04">Email Address</label>
                                                    <input type="text" className="form-control" id="validationDefault04" placeholder={this.state.upemail}
                                                        onChange={this.upemail} />
                                                </div>
                                            </div>
                
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="validationDefault04">Message</label>
                                                    <input type="text" className="form-control" id="validationDefault04" placeholder={this.state.upmsg}
                                                        onChange={this.upmsg} />
                                                </div>
                                            </div>
                                            </div>

                                        </form>
                                
                                    </Modal>
                                    {/* MODAL-------------------------------------------------------------------------------------------------------------------------------- */}
                                    
                                    

                                </tr>

                            )}


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default MessagesInfo;