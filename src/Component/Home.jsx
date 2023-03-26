import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'
import React from 'react'
import dev from '../images/dev-ed-wave.png'
function Home() {


    return (
        // "
        <DIV id="home" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" >
            <div className="imgdiv">
                <img className='topimg' style={{ backgroundColor: "teal", borderRadius: "600px" }} src={dev} alt="" />
            </div>
            <div className='name-title'>
                <h1 id="user-detail-name" style={{ textAlign: "center" }}>Hi 👋 I'm Shoaib Mansuri </h1>
                <p id="user-detail-intro" > <ChevronLeftIcon />A Full Stack Web Developer <ChevronRightIcon /> </p>

            </div>
        </DIV>
    )
}

const DIV = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width:80%;
    margin: 100px auto;
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
    margin: 100px auto;

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
    margin: 100px auto;
    }

    

`


export default Home