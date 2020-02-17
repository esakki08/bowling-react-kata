import * as React from 'react';
import './play-button.css'

export interface Props {
    
}
 
export interface State {
    
}
 
export class PlayButton extends React.Component<Props, State> {
    state = {   }
    render() { 
        return ( 
            <button className="play-button" >Play</button>
         );
    }
}