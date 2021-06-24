import React, { useState, useEffect } from 'react';
import {Nav, NavItem, Navbar, Button,Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap'

function Header()
{
    return(
        <>
        <div className=' container whole'>
        <Navbar >
           <div className='container nav-container'>
               <div className='row'>
                   <div className='col-4'>
                        <img className='images' src={`${process.env.PUBLIC_URL}/images/hithu-res.jpeg`} alt='groceries'/>
                   </div>
                   <div className='col-8'>
                   <Nav className='ml-auto nav-bar'>
                        <NavItem>
                            <h1 className='nav-head'><bold>HITHAISHI S</bold></h1>
                            <h3 className='nav-desc'>Student</h3>
                        </NavItem>
                        
                       
                    </Nav>
                   </div>
                    
               </div>
                
           </div>
        </Navbar>
        <div className='container abc'>
        <div className='row'>
            <div className='col-3 aside-bar'>
                <aside>
                    <div className='margin-aside'>
                        <div className='underline'>
                        <h4>
                            <strong><span className='fa fa-phone margin-span'></span>CONTACT ME</strong>
                        </h4>
                        </div>
                   
                    <p>
                        <span className='fa fa-mobile margin-span'>     </span>
                        +91 8546939830
                    </p>
                    <p>
                        <span className='fa fa-map-marker margin-span'>     </span>
                        3rd cross, Ashoka Nagar,Bangalore.
                    </p>
                    <p>
                        <span className='fa fa-envelope margin-span'>     </span>
                        hithaishigowda73328@gmail.com
                    </p>
                    </div>

                    <div className='margin-aside'>
                    <div className='underline'>
                        <h4>
                            <span className='fa fa-laptop margin-span'></span><strong>EXPERTISE</strong>
                        </h4>
                        </div>
                        
                        <ul>
                            <li className='exp'>
                                Web Development(MERN Stack)
                                <span className='bar'><span className='web'></span></span>
                            </li>
                            <li className='exp'>
                                C/C++ Programming
                                <span className='bar'><span className='c'></span></span>
                            </li>
                            <li className='exp'>
                                JAVA Programming
                                <span className='bar'><span className='java'></span></span>
                            </li>
                            <li className='exp'>
                                Python
                                <span className='bar'><span className='python'></span></span>
                            </li>
                            <li className='exp'>
                                MySQL
                                <span className='bar'><span className='sql'></span></span>
                            </li>
                            <li className='exp'>
                                Machine Learning
                                <span className='bar'><span className='ml'></span></span>
                            </li>
                            <li className='exp'>
                                GeeksForGeeks Practice
                                <span className='bar'><span className='gfg'></span></span>
                            </li>
                        </ul>
                    </div>

                    <div className='margin-aside'>
                        <div className='underline'>
                            <h4>
                                <strong><span className='fa fa-graduation-cap margin-span'></span>EDUCATION</strong>
                            </h4>
                        </div>

                        <div className='row body'>
                            <div className='col-2'>
                                <strong>2016</strong>
                            </div>
                            <div className='col-10'>
                                <div>
                                    <strong>Nandini Vidyanikethana</strong> - Bangalore.
                                </div>
                                <div>
                                    Graduated High School.
                                </div>
                            </div>
                        </div>

                        <div className='row body'>
                            <div className='col-2'>
                                <strong>2018</strong>
                            </div>
                            <div className='col-10'>
                                <div>
                                    <strong>Narayana</strong> - Bangalore.
                                </div>
                                <div>
                                    Graduated from PU College
                                </div>
                            </div>
                        </div>
                    
                        <div className='row body'>
                            <div className='col-2'>
                                <strong>2021</strong>
                            </div>
                            <div className='col-10'>
                                <div>
                                    <strong>Sir M Visvesvaraya Institute Of Technology</strong> - Bangalore.
                                </div>
                                <div>
                                    Persuing BE in  Computer Science and Engineering, 3rd Year.
                                </div>
                            </div>
                        </div>
                    
                    
                </div>
                    
                </aside>
            </div>
            <div className='col-9'>
                <div >
                    <div className='underline '>
                    <h4>
                       <strong><span className='fa fa-user margin-span margin-top'></span>ABOUT ME</strong>
                    </h4>
                    </div>
                    
                    <div className="margin-para  section-2">
                        A software engineering student who is seeking to find the opportunity to work in a fun and challenging environment
                        that will encourage her to improve and learn new and necessary skills as well as be movtivated by the company to do
                        the best for the saking of helping herself and the company advance in the software engineering industry.
                    </div>
                </div>

                <div>
                    <div className='underline'>
                    <h4>
                    <span><img className=' certificate margin-span' src={`${process.env.PUBLIC_URL}/images/work.png`} alt='certificate'/></span><strong>INTERNSHIP</strong>
                    </h4>
                    </div>
                    <div className="margin-para ">
                    <div >
                        <strong>Intern at Bitloka Solutions Private Limited,Bangalore.</strong>
                    </div>
                    <div>June 2021 - Present</div>
                    <div className=' section-2'>
                    <ul  >
                        <li>
                            Develop and manage an online website named "HTML Beautifier" for the company.
                        </li>
                        <li>
                            The website basically takes a html document, with the help of AI Engine and ML models it figures out the context of the
                            html document and styles it in a best possible way.
                        </li>
                    </ul>
                    </div>
                    </div>
                    
                </div>

                <div>
                    <div className='underline'>
                    <h4>
                        <strong><span><img className=' certificate margin-span' src={`${process.env.PUBLIC_URL}/images/badge.png`} alt='certificate'/></span>ACHIVEMENTS</strong>
                    </h4>
                    </div>

                    <div className='section-2'>
                    <ul  className="margin-para ">
                        <li>
                            <strong>II position in the App Innovation Challenge</strong>
                            <div>
                                Secured a second place for the "Online E-commerce Website" project in a competition that was conducted 
                                at Sir M Visvesvaraya Institute Of Technology.
                            </div>
                        </li>
                        <li>
                           <strong> GeeksForGeeks, Rank in Institute - 34</strong>
                           <div>
                               Secured a total of 215 points, solving 161 problems in total at GeeksForGeeks.
                           </div>
                        </li>
                    </ul>
                    </div>
                </div>

                <div>
                    <div className='underline'>
                    <h4>
                        <strong><span><img className=' certificate margin-span' src={`${process.env.PUBLIC_URL}/images/project.png`} alt='certificate'/></span>PROJECTS</strong>
                    </h4>
                    </div>

                    <div className='section-2'>
                    <ul className='margin-last'>
                        <li>
                            <strong>E-commerece Grocery Website</strong>
                            <div>
                            An Ecommerce grocery website developed for Sri Balaji Stores a grocery store in RT Nagar Bangalore.
                            This project aims to provide digital presence to small bussiness. It empowers small grocery stores to sell 
                            their products online and to compete with online e commerce bussiness.
                            </div>
                            <div>
                                <strong>Website link:</strong> <a href="https://sribalajistores.herokuapp.com/" alt='sbs'>https://sribalajistores.herokuapp.com/</a>
                            </div>
                        </li>
                        
                        <li>
                           <strong>Sentiment Analysis</strong>
                           <div>
                           Sentiment Analysis is the process of determining whether a piece of writing is positive,
                            negative or neutral. In this project, the model outputs the sentiment of the inputted text.
                           </div>
                        </li>
                        
                        <li>
                            <strong>EduBot</strong>
                            <div>
                            Edubot is a chatbot which helps computer science students to find the best courses and resources.The student can ask a
                            question like the best courses for machine learning and the bot replies with a set of best courses.Various queries of students
                            are answered by the bot in the similar manner.
                            </div>
                        </li>
                       
                    </ul>
                    </div>
                </div>

               
            </div>
        </div>
        </div>



           <div className='container footer'>
               <div className='row'>
                   
                  
                   
                        <div className='footer-nav'>
                           <strong> SOCIAL MEDIA HANDLES</strong>
                           <div className=' footer-icon'>
                           <a href='https://github.com/hitha2000' className='links'><span className='fa fa-github fa-large margin-span'></span></a>
                           <a href='https://www.linkedin.com/in/hithaishi-s-3637121a1/' className='links'><span className='fa fa-linkedin-square fa-large margin-span'></span></a>
                           <a href='https://www.instagram.com/hi_th_u_gowda/' className='links'><span className='fa fa-instagram fa-large margin-span'></span></a>
                            </div>
                        </div>
                        
                       
               
                    
               </div>
                
           </div>
      
           </div>
        
        </>
    );
}

export default Header;