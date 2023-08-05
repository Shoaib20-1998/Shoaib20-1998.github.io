import styled from '@emotion/styled'
import React from 'react'
import cover from '../images/cover.png'
import Profile from './Chakracomp/Profilecart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Headingofsection from './Chakracomp/Headingofsection'
import FontAwsomeCodeIcon from './Chakracomp/FontAwsomeCodeIcon'

function About() {
  return (

    <DIV id="about" className="about section" >
      <Headingofsection heading={"About Me"} />
      <div data-aos="zoom-in" className='intro' data-aos-duration="2000"  >
        <div className='profile'>
          <Profile />
        </div>
        <div className='description'>
          <h1 className='profheading'> Professional Summary :</h1>
          <p id="user-detail-intro" align="justify">Full-stack web developer with MERN expertise. Successfully completed solo and team projects. Strong problem-solving and communication skills. Quick learner, can leverage generative AI, and adept at adopting new tech stacks swiftly. Eager to contribute effectively in dynamic development teams.</p>
        </div>
      </div>
      <div className='aboutdetails'>
        <div className='subaboutdetails' data-aos-duration="1000" data-aos="fade-right">
          <p><span>1000+</span> Hours </p>
          <p> of Coding Experience</p>
        </div>
        <div className='subaboutdetails' data-aos-duration="1000" data-aos="fade-left" >
          <img src="" alt="" />
          <p>Solved <span>400+</span></p>
          <p>Data Structure Problems</p>
        </div>
        <div className='subaboutdetails'data-aos-duration="1000" data-aos="fade-right">
          <img src="" alt="" />
          <p><span>100+</span> Hours </p>
          <p>of Soft Skills Development</p>
        </div>
        <div className='subaboutdetails' data-aos-duration="1000" data-aos="fade-left">
          <img src="" alt="" />
          <p><span>6+</span>Major Projects</p>
          <p><span>30+</span>Small Project Assignment </p>
        </div>

      </div>
      <FontAwsomeCodeIcon />
    </DIV>

  )
}


const DIV = styled.div`
    /* border:1px solid red; */
    text-align:center;
    width:80%;
    margin: 5% auto 0;
    font-family: sans-serif;

 
      
    
    
    .intro{
      display: flex;
      width: 80%;
      margin: 40px auto 10px;
      padding: 5px 10px;
      justify-content: space-between;
      align-items: center;
      background-color: teal;
      border-radius: 20px;
    }
    
    .description{
      text-align: left;
      padding:5px 20px;
      font-size: 25px;
      margin-left: 30px;
      font-family: sans-serif;
       color:white;
    }
    .profheading{
      font-size: 40px;
      margin: 25px auto;
      padding: 25px auto;
    }
    .aboutdetails{
      display: flex;
      width: 80%;
      margin: 0 auto;
      justify-content: space-evenly;
      text-align:center;
      align-items: center;
      
    }
    .subaboutdetails{
      background-color: teal;
      width:250px;
      padding: 30px;
      border-radius: 200px;
      color:white;
      font-family: sans-serif;
    }
    
    .closingtagdiv{
      width: 80%;
      text-align:center;
    }
    span{ 
      font-weight: bolder;
      font-size: larger;
    }

  @media only screen and (min-width: 601px) and (max-width: 1200px){
    /*Tablets [601px -> 1200px]*/

    .intro{
      display: block;
      width: 100%;
      margin: 40px auto ;
      padding: 5px 10px 20px;
    }
    .description{
      text-align: left;
      padding:5px 15px;
      font-size: 20px;
      margin-left: 30px;
      font-family: sans-serif;
       color:white;
      margin: auto;

    }
    .profheading{
      font-size: 30px;
      margin: 10px auto;
      padding: 10px auto;
    }
    .aboutdetails{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap:20px;
      width: 80%;
      margin: 0 auto;
      justify-content: space-evenly;
      text-align:center;
      align-items: center;
    }
    .subaboutdetails{
      background-color: teal;
      padding: 30px;
      border-radius: 200px;
      color:white;
      font-family: sans-serif;
    }
    
    
    .closingtagdiv{
      width: 100%;   
    }
   
    
    span{ 
      font-weight: bolder;
      font-size: larger;
    }


  }
    @media only screen and (min-width:426px) and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/
   
    .intro{
      display: block;
      width: 100%;
      margin: 40px auto ;
      padding: 5px 10px 20px;
    }
    .description{
      text-align: left;
      padding:5px 15px;
      font-size: 18px;
      margin-left: 30px;
      font-family: sans-serif;
      color:white;
      margin: auto;

    }
    .profheading{
      font-size: 24px;
      margin: 10px auto;
      padding: 10px auto;
    }

    .aboutdetails{
      display: grid;
      grid-template-columns: repeat(1,1fr);
      gap:20px;
      width: 80%;
      margin: 0 auto;
      justify-content: space-evenly;
      text-align:center;
      align-items: center;
    }
    .subaboutdetails{
      background-color: teal;
      font-size: small;
      height: auto;
      width:100%;
      padding: 30px;
      border-radius: 200px;
      color:white;
      font-family: sans-serif;
    }
    
    
    .closingtagdiv{
      width: 50%;   
    }
   
    
    span{ 
      font-weight: bolder;
      font-size: larger;
    }

    }
    @media only screen and (min-width: 50px) and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
    .intro{
      display: block;
      width: 100%;
      margin: 40px auto ;
      padding: 5px 10px 20px;
    }
    .description{
      text-align: left;
      padding:5px ;
      font-size: 15px;
      margin-left: 30px;
      font-family: sans-serif;
      color:white;
      margin: auto;
    }
    .profheading{
      font-size: 18px;
      margin: 10px auto;
      padding: 10px auto;
    }
    .aboutdetails{
      display: grid;
      grid-template-columns: repeat(1,1fr);
      gap:10px;
      width: 80%;
      margin: 0 auto;
      justify-content: space-evenly;
      text-align:center;
      align-items: center;
    }
    .subaboutdetails{
      background-color: teal;
      font-size: 15px;
      height: auto;
      width:100%;
      padding: 10px;
      border-radius: 200px;
      color:white;
      font-family: sans-serif;
    }
    
    
    .closingtagdiv{
      width: 50%;   
    }
   
    
    span{ 
      font-weight: bolder;
      font-size: larger;
    }

    
    }
`
export default About