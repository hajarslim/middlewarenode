import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer
, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow  } from
"mdbreact";
import { Fa500Px, FaAlignCenter, FaAlignLeft, FaUniversity } from "react-icons/fa";


import React from 'react'
function Home() {
    return (
        <div style={{
           
        }}>
            <br />
            <br />

            {/* top image with side text */}
            <MDBContainer>
                <MDBRow style={{marginLeft: -100,marginRight:-100}}>
                <MDBCol lg="6">
                    <MDBView waves>
                    <img src="https://t4.ftcdn.net/jpg/02/09/86/67/240_F_209866700_0AEd2dA7gya3cHUzDdy4UvVRgQQIM3gD.jpg"
                     style={{height:'300px', width:'700px'}} className="img-fluid" alt=""  />
                    </MDBView>
                </MDBCol>
                <MDBCol lg="6">
                    <p style={{ marginTop: 70,marginLeft:100, fontSize: 30, fontWeight: 'bold',color:'#557174'}}>Master in-demand skills quickly</p>
                    <p style={{ marginTop: 20,marginLeft:125, fontSize: 15,color:'#557174'}}>Build and practice skills that will set your resume apart</p>
                    <div style={{marginLeft:270}}>
                    <FaUniversity size={55} /> 
                    </div>
                    <p style={{ marginTop: 20, marginLeft: 220, fontSize: 15,color:'#557174'}}>Learn from top instructors</p>
                   
                </MDBCol>
                </MDBRow>
            </MDBContainer>

            {/* services */}
            <div class="card" style={{ marginTop: 40, color:'#557174'}}>
              <h3  style={{fontSize: 25, fontWeight: 'bold',marginTop: 10, marginLeft:720}} >COURSES</h3>  
            </div>
            {/* <p style={{ marginLeft: 700, marginTop: 30, fontSize: 30, fontWeight: 'bold'}}>SERVICES</p> */}
            <div className="card-deck" style={{ marginLeft: 100, marginRight: 100, marginBottom: -80, marginTop: 30 }}>
               
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://img.phonandroid.com/2019/09/android-10.jpg" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body">
                        <h5 className="card-title">Android</h5>
                        <p className="card-text">In this course, you'll learn the basics of building Android apps with the Kotlin programming language.</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/PackageInfo"><button type="button" className="btn btn-dark">View more</button></Link>
                    </div>
                </div>
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://www.blue-search.com/wp-content/uploads/2020/07/AQD_Machine-Learning_1200x628.png" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body" style={{ height: 200 }}>
                        <h5 className="card-title">Machine learning</h5>
                        <p className="card-text">Machine learning is about teaching computers how to learn from data to make decisions or predictions.</p>
                    </div>
                    <div className="card-footer">
                        <Link to="/PackageInfo"><button type="button" className="btn btn-dark">View more</button></Link>
                    </div>
                </div>
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://img-0.journaldunet.com/LWTY-88H_HUzeKLwh6f2aOP7pgU=/1500x/smart/ead0a7a3729547aba8dc36a9e81859d8/ccmcms-jdn/11515476.jpg" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body">
                        <h5 className="card-title">Python</h5>
                        <p className="card-text">Use Python To Create Reports, Share Insights, And Automate Tasks With Machine Learning. Learn R And Python. Learn At Your Own Pace.</p>
                    </div>
                    <div className="card-footer">
                        <a href="/PackageInfo"><button type="button" className="btn btn-dark">View more</button></a>
                    </div>
                </div>
            </div>
            
            <div className="card-deck" style={{ marginLeft: 100, marginRight: 100, marginBottom: -80, marginTop: 30 }}> 
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://assets.justinmind.com/wp-content/uploads/2019/10/best-20-web-development-blogs.png" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body">
                        <h5 className="card-title">Web development</h5>
                        <p className="card-text">Learn web development from top-rated instructors. Find the best coding and programming courses for your level and needs.</p>
                    </div>
                    <div className="card-footer">
                        <a href="/PackageInfo"><button type="button" className="btn btn-dark">View more</button></a>
                    </div>
                </div>
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://s3-eu-central-1.amazonaws.com/digiblog/wp-content/uploads/2020/08/04092732/java-1200x890-%E2%80%93-2.png" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body">
                        <h5 className="card-title">Java</h5>
                        <p className="card-text">Why Learn Java? · Java is a platform-independent language. We can write Java code in one platform and run it in another platform·</p>
                    </div>
                    <div className="card-footer">
                        <a href="/PackageInfo"><button type="button" className="btn btn-dark">View more</button></a>
                    </div>
                </div>
                <div className="card shadow-lg p-1 mb-5 bg-white rounded" style={{ height: 520 }}>
                    <img src="https://pbs.twimg.com/media/DU7GUGCV4AAf90X.jpg" className="card-img-top" alt="..." height="320px" />
                    <div className="card-body">
                        <h5 className="card-title">Spring boot</h5>
                        <p className="card-text">Learn Spring Boot, from the core concepts to the advanced scenarios you can implement with the framework.</p>
                    </div>
                    <div className="card-footer">
                        <a href="/PackageInfo"><button type="button" className="btn btn-dark">View more</button></a>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />   
        </div>
        
    )
}
export default Home;