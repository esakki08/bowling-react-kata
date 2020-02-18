import * as React from 'react';
import './play-arena.css'
import { ScoreCard, GameArea, ActionBox } from './components';


export interface Props {
    
}
 
export interface State {
    
}
 
export class PlayArena  extends React.Component<Props, State> {
    state = {   }
    render() { 
        return (<div className="play-arena">
            <ScoreCard />
            <GameArea />
            <ActionBox />
        </div> );
    }
}