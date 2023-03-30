import styled from '@emotion/styled'
import React from 'react'
import cover from '../images/cover.png'
import Profile from './Chakracomp/Profilecart'


function About() {
  return (
    <DIV id="about" className="about section">

      <button className='heading'>About Me</button>

      <div className='intro' data-aos="fade-right" >
        <div className='profile'>
          <Profile />
        </div>
        <div className='description'>
          <h1 className='profheading'> Professional Summary :</h1>
          <p align="justify">Full Stack Web Developer Specialized in Mern Stack.
             Skilled in developing web applications. 1000+ hours of coding experience and top of that build some Projects.
             Solved 400+ Data Structure And Algoritham problems. Looking forward to honing my skills in an organization. </p>
        </div>
      </div>


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
      margin: 40px auto ;
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
    
    }
`
export default About