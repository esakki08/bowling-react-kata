import * as React from 'react';
import './game-ball.css'

export interface GameBallProps {
    
}
 
export interface GameBallState {
    
}
 
export class GameBall extends React.Component<GameBallProps, GameBallState> {
    state = {   }
    render() { 
        return (<React.Fragment>
            <div className="ball">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle">
                <div className="dot dot-1"></div>
                <div className="dot dot-2"></div>
                <div className="dot dot-3"></div>
                </div>
            </div>
        </React.Fragment> );
    }
}