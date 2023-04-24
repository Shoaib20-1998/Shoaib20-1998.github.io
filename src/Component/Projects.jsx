import styled from '@emotion/styled'
import React from 'react'
import Headingofsection from './Chakracomp/Headingofsection'
import ProjectCart from './Chakracomp/ProjectCart'
import bestylish from '../images/bestylish.png'
// import Carousel from './Chakracomp/Crousel'
import dark from '../images/dark.png'
import GitHubCalendar from 'react-github-calendar';
import FontAwsomeCodeIcon from './Chakracomp/FontAwsomeCodeIcon'
function Projects() {
  return (
    <DIV id="projects" >

      <Headingofsection heading={"Projects"} />
      <div className='projectcard'>
        <div data-aos="fade-up-right">
          <ProjectCart img={bestylish} imgdark={dark} title={["React", "CSS", "Javascript", "HTML", "Chakra-UI", "Sweet Alert", "Ant-Design"]} heading={"Life Style - Be Stylish"} disc={"An Individual Project : Lifestyle is India's leading fashion destination for the latest trends. Lifestyle brings multiple categories including men, women and kids’ apparel and footwear etc"} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
        <div data-aos="fade-up-left">
          <ProjectCart img={bestylish} imgdark={dark} title={["React", "CSS", "Javascript", "HTML", "Chakra-UI", "Sweet Alert", "Ant-Design"]} heading={"Life Style - Be Stylish"} disc={"An Individual Project : Lifestyle is India's leading fashion destination for the latest trends. Lifestyle brings multiple categories including men, women and kids’ apparel and footwear etc"} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
        <div data-aos="fade-up-right">
          <ProjectCart img={bestylish} imgdark={dark} title={["React", "CSS", "Javascript", "HTML", "Chakra-UI", "Sweet Alert", "Ant-Design"]} heading={"Life Style - Be Stylish"} disc={"An Individual Project : Lifestyle is India's leading fashion destination for the latest trends. Lifestyle brings multiple categories including men, women and kids’ apparel and footwear etc"} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
        <div data-aos="fade-up-left">
          <ProjectCart img={bestylish} imgdark={dark} title={["React", "CSS", "Javascript", "HTML", "Chakra-UI", "Sweet Alert", "Ant-Design"]} heading={"Life Style - Be Stylish"} disc={"An Individual Project : Lifestyle is India's leading fashion destination for the latest trends. Lifestyle brings multiple categories including men, women and kids’ apparel and footwear etc"} deploye={"https://bestylish.vercel.app/shirts"} github={"https://github.com/Shoaib20-1998/general-zebra-503"} />
        </div>
        {/* <Carousel /> */}
      </div>
      <FontAwsomeCodeIcon />
      {/* <GitHubCalendar colorScheme="light" username="shoaib20-1998" /> */}

      <Headingofsection heading={"GitHub Calender"} />

      <div id="gitcalender" className="react-activity-calendar">
        <img src=" https://ghchart.rshah.org/008080/shoaib20-1998" alt="" />
      </div>
      <FontAwsomeCodeIcon />

      <Headingofsection heading={"GitHub Streak Stats"} />

      <div className='git'>
        <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=shoaib20-1998&theme=radical&hide_border=true&border_radius=4.5&locale=en&date_format=&mode=daily&exclude_days=Sun%2CSat&type=svg&card_width=495&background-type=gradient&properties=currStreakNum" alt="" />
      </div>

      <FontAwsomeCodeIcon />
      <div className='git'>

        <Headingofsection heading={"GitHub Top Languages"} />

        <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=shoaib20-1998&theme=radical" alt="" />
      </div>
      <FontAwsomeCodeIcon />

      <Headingofsection heading={"GitHub Stats Card"} />

      <div>
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

    }
    .git{
      width: 100%;
    }
    img{
      width: 100%;
      height: 300px;
      display: block;
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
      height: 100px;
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
      height: 100px;
      display: block;
    }
    
    }


`

export default Projects