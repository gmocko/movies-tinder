import React from 'react';
import styled from 'styled-components';
import ReactSwipeEvents from 'react-swipe-events';
import Swipeable from 'react-swipeable'
import movies from 'movies'

const Holder = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #f5f5f5;
  border-radius: 2vh;
  text-align: center;
  p {
    max-width: 70vw;
  }
  h1 {
    max-width: 70vw;
  }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 20px;
    img { 
        max-height: 40vh;
        max-width: 90vw;   
    }
`
const ButtonWrapper = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const AcceptButton = styled.button`
    height: 8vh;
    width: 8vh;
    border-radius: 25%;
    background: #61dd99;
    &:hover {
        box-shadow: 0 0 10px #61dd99;
        transition: .33s all;
    }
`

const RejectButton = styled.button`
    background: #ff696a; 
    border-radius: 25%;
    height: 8vh;
    width: 8vh;
    &:hover {
        box-shadow: 0 0 10px #ff696a;
        transition: .33s all;  
  }
`

let toChange = 0
export class Tinder extends React.Component {
    constructor() {
    super();
    this.state = 
        movies[0]   
}

acceptMovie(event){
    console.log(`Acept Movie  ${this.state.id}`);
    toChange ++  
    let newMovie = movies[toChange]
        this.setState(
            newMovie   
        )    
}

rejectMovie(event){
    console.log(`Reject Movie  ${this.state.id}`);
    toChange ++
    let newMovie = movies[toChange]
        this.setState(
            newMovie   
        )
}
    
onSwipedLeft(event) {
    alert('Start swiping...', event);
    console.log(`Moved ${position.x} pixels horizontally`, event);
  }

swipingReject(e) {
    console.log(`Reject Movie  ${this.state.id}`)
    toChange ++
    let newMovie = movies[toChange]
        this.setState(
            newMovie   
        )    
  }
 
render() {
    const { title, summary, rating, imageURL } = this.state;
    return (
        <div >
            <Holder 
                onTouchEnd={(e) => this.swipingReject(e)}>
                <h1>{title} {rating}/10</h1>
                <p>{summary}</p>
                <ImageWrapper >
                    <img src={imageURL} alt={title}/>
                </ImageWrapper>
                <ButtonWrapper>
                    <AcceptButton onClick={(event)=> this.acceptMovie(event)}/>    
                    <RejectButton onClick={(event)=> this.rejectMovie(event)} />
                </ButtonWrapper>   
            </Holder>            
        </div>      
    )
}   
}
