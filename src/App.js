import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Idea from './Components/Idea'
import image from './Components/redmain.jpg'
import scotia from './Components/scotia.jpg'
import t1 from './Components/t1.jpg'
import t2 from './Components/t2.gif'
import t3 from './Components/t3.jpg'
import t4 from './Components/t4.jpg'
import t5 from './Components/t5.jpg'
import t6 from './Components/t6.jpg'
import t7 from './Components/t7.png'
import t8 from './Components/t8.jpg'


const Background = styled.div`
background-color: #f9f9f9;
  `

const Box = styled.div`
  display:flex;
  flex-direction: row;
  box-sizing: border-box;
  padding-top: 0px
  `

const CardHolder = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: left;
background-color: white;
border-radius: 5px;
margin-left: 15%;
margin-right: 15%;
transform: translate(0px, -8%);
`

const IdeaHolder = styled.div `
`

const Title = styled.div `
font-family: 'Rajdhani', sans-serif;
flex: 1;
background-color:red;
color: white;
font-size: 60px;
padding-left: 30px;
padding-top: 20px;
`

const IdeaTitle = styled.div `
font-family: 'Rajdhani', sans-serif;
font-size: 30px;
font-weight: 200;
`
const Titleimg = styled.img `
flex: 1;
min-width: 0;
background-color: blue;
height: 400px;
max-width: 100%;
object-fit:cover;
`

const TileTitle = styled.div`
font-family: 'Rajdhani', sans-serif;
font-size: 30px;
font-weight: 100;
padding:15px;
padding-left: 40px;
flex-basis: 100%;

`
function App() {
  return (
    <Background>
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400&display=swap" rel="stylesheet"></link>
        <Box>
            <Title>
              The Future Of Banking
              <IdeaTitle>Data Analytics</IdeaTitle>
              <IdeaTitle>AI and Automation</IdeaTitle>
              <IdeaTitle>Digital Banking</IdeaTitle>
            </Title>
            <Titleimg  src = {scotia} />
        </Box>

        <IdeaHolder>
          
            <CardHolder>
            <TileTitle>Data Analytics</TileTitle>
              <Idea image = {t1}
              info={"Future of retail banking will be data driven with data being one of the most sought after resources of the future."}/>
              <Idea image = {t2}
              info ={"Consumer data will be heavily collected and used to create unique solutions for unique customer  problems. For instance, \"which credit card would better suit your spending habits and lifestyle...\""}
              infotwo={"This will allow users who don't visit physical branches often to obtain personalized interactions based on data collected from them without having to book appointments with advisors."}/>
              <Idea image = {t3}
              info={"Security will become a key aspect of a data driven banking industry - with more uses of biometrics as a security measure for both retail and commercial banking customers. Banks must focus on preventing the likes of biometrics data scraping."}/>
            </CardHolder>

            <CardHolder>
            <TileTitle>AI and Automation</TileTitle>
              <Idea image = {t4}
              info={"There will be a heavy emphasis on streamlining processes within the banking industry. Back office data processing jobs can be automated. This doesn't necessarily mean less jobs, that the job process is more efficient."}
              />
              <Idea image = {t5}
              info={"A lot of financial advising work can be done through artificial intelligence."}
              infotwo={"\"43% of Millennials aren't investing\" - Per Yahoo Finance - banking industry will aim to bring this number down by simplifying investing through AI."}/>
              <Idea image = {t6}
              info={"Credit risk assessment will be done through machine learning by recognizing patterns and behaviour of borrowers."} />
            </CardHolder>

            <CardHolder>
            <TileTitle>Digital Banking</TileTitle>
              <Idea image = {t7}
              info={"There will be less fiat money used, but rather a digitized way of paying by using your personal device to pay with money from your checking account."}/>
              <Idea image = {t8}
               info={"Banks using CRM software will eventually take all processes digital - beyond the scope of current CRM tasks."}/>
            </CardHolder>
        </IdeaHolder>
    </Background>
  );
}

export default App;
