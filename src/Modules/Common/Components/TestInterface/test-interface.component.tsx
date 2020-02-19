import * as React from 'react';
import { ScoreCalculation } from '../../Services/score-calculation.service';
import './test.css'


export interface Props {

}
 
export interface State {
    
}


const constructFrameInput = (key: number, This: any) => {
    return (<React.Fragment>
        <div className="row">
            <div className="col label">
                <label>Frame {(key > 9)? ('Bonus ' + (key + 1)): (key + 1)}</label>
            </div>
            <div className="col inputBox">
                <input type="text" onKeyUp={(e) => { This.frameUpdate(key, e) }} />
            </div>
        </div>
    </React.Fragment>)
}

export class TestInterface extends React.Component<Props, State> {
    private calculation: ScoreCalculation = new ScoreCalculation();
    state = {
        frame: [],
        score: 0
        
    }
    frameUpdate = (key: number, e: any) => {
        let tempFrame: string[] = this.state.frame;
        tempFrame[key] = e.target.value;
        this.setState({ frame: tempFrame })
        this.calculation.setGameResult = this.state.frame.slice().toString().replace(/,/g, '')
        this.setState({ score: this.calculation.getScore });

    }
    getFrames = (): JSX.Element[] => {
        const frames: JSX.Element[] = [];
        for (let frameCount = 0; frameCount < 12; frameCount++){
            frames.push(<React.Fragment key={frameCount}>{constructFrameInput(frameCount, this)}</React.Fragment>);
        }
        return frames;
    }
    render() { 
        return (
        <React.Fragment>
                {this.getFrames()}
                <div className="Total">
                    Total Score
                    <h1>{this.state.score}</h1>
                </div>
        </React.Fragment>
         );
    }
}