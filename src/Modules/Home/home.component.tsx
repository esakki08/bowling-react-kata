import * as React from 'react';
import { PlayButton } from './Components';
import { BannerFrame } from './Components'
import { ScoreCalculation } from '../Common/Services/score-calculation.service';
import { TestInterface } from '../Common';


export interface Props {
    
}
 
export interface State {
    
}
const props: Props = {}


export class Home  extends React.Component<Props, State> {
    state = {}
    // calculateScore = new ScoreCalculation();
    render() { 
        // this.calculateScore.setGameResult = '9-9-9-9-9-9-9-9-9-9-';
        // console.log(this.calculateScore.getScore);
        return (<React.Fragment>
            {/* <BannerFrame />
            <PlayButton /> */}
            <TestInterface />
        </React.Fragment> );
    }
}