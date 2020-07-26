import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    height: 500px;
    width: 300px;
    padding: 15px;
    padding: 15px;
  padding-top: 0px;
  box-shadow: 5px 10px 8px #888888;
  border-radius: 5px;
  margin: 20px;
  background-color: white;
  
`

const StyledImage = styled.img `
height: 175px;
width: 300px;
display: inline-block;
margin-top: 15px;
border-radius: 5px;
`

const StyledTitle = styled.div `
width: 300px;
margin: 10px;
font-size: 18px;
font-family: 'Rajdhani', sans-serif;
`

class Idea extends React.Component {
    render() {
        return (
            <Container>
                <StyledImage src={this.props.image}/>
                <StyledTitle>{this.props.info}</StyledTitle>
                <StyledTitle>{this.props.infotwo}</StyledTitle>
                

            </Container>
            
        )
    }
}
export default Idea;