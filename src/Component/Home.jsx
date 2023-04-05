import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'
import React from 'react'
import dev from '../images/dev-ed-wave.png'
import Typed from 'react-typed';
import git from '../images/github logo.png'
import linkdin from '../images/in.png'
import call from '../images/support.png'
import gmail from '../images/gmail.png'
import FontAwsomeCodeIcon from './Chakracomp/FontAwsomeCodeIcon';
function Home() {
    return (  
            <div id="home"  >
                <DIV1 data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="imgdiv">
                        <img oncontextmenu="return false;" className='topimg' style={{ backgroundColor: "teal", borderRadius: "600px" }} src={dev} alt="" />
                    </div>
                    <div className='name-title'>
                        <h1 id="user-detail-name" style={{ textAlign: "center" }}>Hi 👋 I'm Shoaib Mansuri </h1>
                        <p> <ChevronLeftIcon /> <Typed
                            strings={['A Full Stack Web Developer']}
                            typeSpeed={80}
                            loop
                        /> <ChevronRightIcon /> </p>
                    </div>
                </DIV1>
                <DIV2 className='sociallogo'>
                    <a id="contact-github" href="https://github.com/Shoaib20-1998" target="_blank" rel="noopener"><img src={git} alt="" /></a>
                    <a id="contact-phone" href="tel:+918003740674" target="_blank" rel="noopener"> <img src={call} alt="" /> </a>
                    <a id="contact-linkedin" href="https://www.linkedin.com/in/shoaib-mansuri-7753b2218/" target="_blank" rel="noopener"> <img src={linkdin} alt="" /></a>
                    <a id="contact-email" href="mailto:shoaibmansuri235@gmail.com" target="_blank" rel="noopener"><img src={gmail} alt="" /></a>
                </DIV2>              
                <FontAwsomeCodeIcon />
            </div>
        

    )
}



const DIV1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width:80%;
    margin: 100px auto 0;
    text-align:"center";
    padding-top: 45px;
    .imgdiv{
        width: 50%;
        pointer-events: none;
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
   
    display: block;
    .imgdiv{
        width: 100%;
    }
    .name-title,.name-title>h1{
        margin-top:20px;
        font-size:40px ;
    }
    .name-title,.name-title>h4{
        font-family: sans-serif;
        font-size: 25px;
    }
  }
    @media only screen and (min-width:426px) and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/

    .imgdiv{
        width: 100%;
    }
    .name-title,.name-title>h1{
        font-size:30px ;
        margin-top:20px;
    }
    .name-title,.name-title>h4{
        font-family: sans-serif;
        font-size: 18px;
    }
    
    display: block;
    margin: 70px auto 0;

    }
    @media only screen and (min-width: 100px) and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
    .imgdiv{
        width: 100%;
    }
    .name-title,.name-title>h1{
        font-size:25px ;
        margin-top:20px;
    }
    .name-title,.name-title>h4{
        font-family: sans-serif;
        font-size: 13px;
       
    }
    display: block;
    margin: 70px auto 0;
    }

    

`

const DIV2 = styled.div`
display: flex;
justify-content: space-evenly;
border: 1px teal;
border-bottom-style: dotted;
border-left-style: dotted;
width: 50%;
margin: 0 auto 0;
padding: 10px;

img{
    width: 150px; 
    padding: 10px;

}
@media only screen and (min-width: 601px) and (max-width: 1200px){
    /*Tablets [601px -> 1200px]*/
    margin-top: 0px;
    img{
    width: 100px;   
    padding: 10px;
    }
  }
    @media only screen and (min-width:426px) and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/

    margin-top: 0px;
    img{
    width: 100px;   
    padding: 10px;
    }
    }
    @media only screen and (min-width: 100px) and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
    margin-top: 0px;
    img{
    width: 80px;   
    padding: 10px;
     }
    
    }




`





export default Home