import * as React from 'react';
import './game-pin.css'

export interface Props {
}
 
export interface State {
    
}

const SinglePin = () => (
    <div className="game-pin">
        <div className="top"></div>
        <div className="neck"></div>
        <div className="bottom"></div>
    </div>)

const pinGrouper = () => {
    let rows = [];
    let col: JSX.Element[] = [];
    let rowCount = 0;
    for (let i = 0; i <= 9; i++) {
        col.push(<SinglePin key={i} />)
        if (i === 3 || i === 6 || i === 8 || i === 9 ) {
            rows.push(<div key={rowCount} className={"row idx-" + rowCount}>{col}</div>);
            rowCount++;
            col = [];
        }
    }
    console.log(rows)
    return rows;
}

export class GamePin extends React.Component<Props, State> {
    render() {
        return (<React.Fragment>
            <div className="pin-group">
                {pinGrouper()}
            </div>
        </React.Fragment>);
    }
}
