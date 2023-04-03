import styled from '@emotion/styled'
import React from 'react'
import cover from '../images/cover.png'
import Profile from './Chakracomp/Profilecart'


function About() {
  return (
    <DIV  id="about" className="about section" >

      <button className='heading'>About Me</button>

      <div data-aos="zoom-in" className='intro'  >
        <div className='profile'>
          <Profile />
        </div>
        <div className='description'>
          <h1 id="user-detail-intro" className='profheading'> Professional Summary :</h1>
          <p align="justify">Full Stack Web Developer Specialized in Mern Stack.
            Skilled in developing functional and responsive web applications. 1000+ hours of coding experience and top of that build some Projects
            With a strong foundation in programming languages such as HTML, CSS, JavaScript, and MERN </p>
        </div>
      </div>

      <div  className='aboutdetails'>

        <div className='subaboutdetails' data-aos="fade-right">          
          <p><span>1000+</span> Hours </p>
          <p> of Coding Experience</p>

        </div>
        <div className='subaboutdetails' data-aos="fade-left" >
          <img src="" alt="" />
          
          <p>Solved <span>400+</span></p>
          <p>Data Structure & Algoritham Problems</p>
        </div>
        <div className='subaboutdetails'  data-aos="fade-right">
          <img src="" alt="" />
          
          <p><span>100+</span> Hours </p>
          <p>of Soft Skills Development</p>
        </div>
        <div className='subaboutdetails'  data-aos="fade-left">
          <img src="" alt="" />
          <p><span>5+</span> Major Projects</p>
          <p><span>30+</span> Mini Project assignments </p>       
        </div>   

      </div>
      
       
        {/* <i class="fa-solid fa-code fa-flip" style="color: #008080;"></i> */}

    </DIV>
  )
}

const DIV = styled.div`
    /* border:1px solid red; */
    text-align:center;
    width:80%;
    margin: 70px auto 0;
    font-family: sans-serif;

    .heading{
      font-size:70px;
      color: teal;
      border: 1px teal;
      border-bottom-style: dotted;
      border-left-style: dotted;
      margin:10px 5px;
      padding: 10px 30px;
      font-family:sans-serif;
    }

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
      height: 180px;
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
    .heading{
      font-size:40px;
    }
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
      height: 180px;
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
    .heading{
      font-size:30px;
    }
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
      height: 180px;
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
    @media only screen and (min-width: 325px) and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
  .heading{
      font-size:20px;
      
    }
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
      font-size: 19px;
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