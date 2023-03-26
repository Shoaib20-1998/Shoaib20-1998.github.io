import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'
import React from 'react'
import dev from '../images/dev-ed-wave.png'
import Typed from 'react-typed';
import git from '../images/git1.gif'
import email from '../images/e.gif'
import linkdin from '../images/in.png'
import whats from '../images/w3.gif'
import call from '../images/call.gif'

function Home() {


    return (
        // "
        <>
            <div id="home"  >
                <DIV1 data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="imgdiv">
                        <img className='topimg' style={{ backgroundColor: "teal", borderRadius: "600px" }} src={dev} alt="" />
                    </div>
                    <div className='name-title'>
                        <h1 id="user-detail-name" style={{ textAlign: "center" }}>Hi 👋 I'm Shoaib Mansuri </h1>
                        <p id="user-detail-intro" > <ChevronLeftIcon /> <Typed
                            strings={['A Full Stack Web Developer']}
                            typeSpeed={80}
                            loop
                        /> <ChevronRightIcon /> </p>

                    </div>
                    
                </DIV1>
                <DIV2 className='sociallogo'>
                     <a href="https://github.com/Shoaib20-1998"><img src={git} alt="" /></a>
                     <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><img src={email} alt="" /></a>     
                      <a href="https://api.whatsapp.com/send?phone=+918003740674">  <img src={whats} alt="" /></a>
                      <a href="tel:+918003740674"> <img src={call} alt="" /> </a>
                      <a href="https://www.linkedin.com/in/shoaib-mansuri-7753b2218/"> <img src={linkdin} alt="" /></a>
                </DIV2>


            </div>
        </>

    )
}

const DIV1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width:80%;
    margin: 100px auto 50px;
    text-align:"center";
    padding-top: 45px;
    .imgdiv{
        width: 50%;
    }
    .name-title{
        font-family: sans-serif;
        color:teal
    }
    .name-title,.name-title>h1{
        font-size:50px ;
    }
    .name-title,.name-title>h4{
        font-family: sans-serif;
        color:teal;
        font-size: 25px;
        text-align: center;
    }


    @media only screen and (min-width: 601px) and (max-width: 1200px){
    /*Tablets [601px -> 1200px]*/
    .name-title,.name-title>h1{
        font-size:20px ;
    }
    .name-title,.name-title>h4{
        font-family: sans-serif;
        font-size: 10px;
    }
  }
    @media only screen and (min-width:426px) and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/

    .name-title,.name-title>h1{
        font-size:20px ;
        margin-top:20px;
    }
    .name-title,.name-title>h4{
        font-family: sans-serif;
        font-size: 10px;
    }
    
    display: block;
    margin: 70px auto;

    }
    @media only screen and (min-width: 325px) and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
    .name-title,.name-title>h1{
        font-size:20px ;
        margin-top:20px;
    }
    .name-title,.name-title>h4{
        font-family: sans-serif;
        font-size: 10px;
       
    }
    display: block;
    margin: 70px auto;
    }

    

`

const DIV2 = styled.div`
display: flex;
justify-content: space-evenly;
width: 80%;
margin: auto;
img{
    width: 150px;
    margin-left: 40px;
    padding: 10px;

}

`





export default Home