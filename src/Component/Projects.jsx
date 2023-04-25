import styled from '@emotion/styled'
import React from 'react'
import Headingofsection from './Chakracomp/Headingofsection'
import ProjectCart from './Chakracomp/ProjectCart'
import bestylish from '../images/bestylish.png'
// import Carousel from './Chakracomp/Crousel'
import dark from '../images/dark.png'
import beautifydark from '../images/Beautifydark.png'
import beautifylight from '../images/Beautifylight.png'
import gadgetlight from '../images/gadgetlight.png'
import gadgetdark from '../images/gadgetdark.png'
import medzdark from '../images/medzdark.png'
import medzlight from '../images/medzlight.png'
import GitHubCalendar from 'react-github-calendar';
import FontAwsomeCodeIcon from './Chakracomp/FontAwsomeCodeIcon'
function Projects() {
  return (
    <DIV id="projects" >

      <Headingofsection heading={"Projects"} />
      <div className='projectcard'>
        <div data-aos="fade-up-right">
          <ProjectCart img={medzlight} imgdark={medzdark} title={["React", "Styled-Component", "CSS", "Javascript", "Chakra-UI", "Sweet Alert"]} heading={"Tata1mg - MedZ+"} disc={"A Collaberative Project : MedZ+ is a user-friendly online platform where customers can easily purchase prescription and over-the-counter medicines, health and wellness products, and medical supplies"} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
        <div data-aos="fade-up-left">
          <ProjectCart img={bestylish} imgdark={dark} title={["React", "CSS", "Javascript", "HTML", "Chakra-UI", "Sweet Alert", "Ant-Design"]} heading={"Life Style - Be Stylish"} disc={"An Individual Project : Lifestyle is India's leading fashion destination for the latest trends. Lifestyle brings multiple categories including men, women and kids’ apparel and footwear etc"} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
        <div data-aos="fade-up-right">
          <ProjectCart img={gadgetlight} imgdark={gadgetdark} title={["React", "CSS", "Javascript", "HTML", "Chakra-UI", "Gifhy", "Ant-Design"]} heading={"360'Gadgets - Gadgets++"} disc={"An Individual Project : Gadget Review is a lifestyle website focusing on gadget news. The mission of the site is to provide honest reviews of products that help consumers make informed choices."} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
        <div data-aos="fade-up-left">
          <ProjectCart img={beautifylight} imgdark={beautifydark} title={["HTML", "CSS", "Javascript", "Sweet Alert", "Php", "Bootstrap"]} heading={"Nykaa - Beautify"} disc={"A Collabrative Project : Nykaa is an E-Commerce website for beauty wellness and cosmetic products. It sells beauty, wellness and fashion products across the world."} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
      </div>
      {/* <Carousel /> */}
      {/* <GitHubCalendar colorScheme="light" username="shoaib20-1998" /> */}
      <FontAwsomeCodeIcon />

      <Headingofsection heading={"GitHub Calender"} />

      <div st id="gitcalender" className="react-activity-calendar">
        <img src=" https://ghchart.rshah.org/008080/shoaib20-1998" alt="" />
      </div>
      <FontAwsomeCodeIcon />

      <Headingofsection heading={"GitHub Streak Stats"} />

      <div className='git'>
        <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=shoaib20-1998&theme=radical&hide_border=true&border_radius=4.5&locale=en&date_format=&mode=daily&exclude_days=Sun%2CSat&type=svg&card_width=495&background-type=gradient&properties=currStreakNum" alt="" />
      </div>

      <FontAwsomeCodeIcon />
      <Headingofsection heading={"GitHub Top Languages"} />
      <div className='git'>
        <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=shoaib20-1998&theme=radical" alt="" />
      </div>
      <FontAwsomeCodeIcon />

      <Headingofsection heading={"GitHub Stats Card"} />

      <div className='git'>
        <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=shoaib20-1998&show_icons=true&theme=radical" alt="" />
      </div>
      <FontAwsomeCodeIcon />

    </DIV>
  )
}

const DIV = styled.div`
    text-align:center;
    width:80%;
    margin: 5% auto 0;
    font-family: sans-serif;

    .projectcard{
      display: grid;
      grid-template-columns: repeat(2,1fr);
    }

    #gitcalender{

      border: 2px dotted teal;
      transition: transform .2s;
      padding: 12px;
    }
    #gitcalender:hover{
      transform: scale(1.05); 

    }
    .git:hover{
      transform: scale(1.05); 

    }
    .git{
      width: 100%;
      border: 2px dotted teal;
      padding: 12px;
      transition: transform .2s;

    }
    img{
      width: 80%;
      height: 300px;
      display: block;
      margin: auto;
    }
    @media only screen and (min-width: 601px) and (max-width: 1200px){
    /*Tablets [601px -> 1200px]*/
    .projectcard{
      display: grid;
      grid-template-columns: repeat(1,1fr);
      margin: auto;
    }
    img{
      width: 100%;
      height: 200px;
      display: block;
    }
   
  }
    @media only screen and (min-width:426px) and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/
    .projectcard{
      display: grid;
      grid-template-columns: repeat(1,1fr);
      margin: auto;
    }
    
    img{
      width: 100%;
      height: 150px;
      display: block;
    }
    }
    @media only screen and (min-width: 100px) and (max-width: 425px){
	/*Small smartphones [325px -> 425px]*/
  .projectcard{
      display: grid;
      grid-template-columns: repeat(1,1fr);
      margin: auto;
    }

    img{
      width: 100%;
      height: 150px;
      display: block;
    }
    
    }


`

export default Projects