import * as React from 'react';
import './game-area.css'
import { GameBall, GamePin, GameTrack } from '../../components';

export interface Props {
    
}
 
export interface State {
    
}
 
export class GameArea extends React.Component<Props, State> {
    state = {   }
    render() { 
        return (
            <div className="game-area">
                <div className="container">
                    <GamePin />
                    <GameTrack />
                    <GameBall />
                </div>
            </div>
        );
    }
}