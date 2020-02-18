import * as React from 'react';
import './loader.css'

export interface Props {
    
}
 
export interface State {
    
}
 
export class Loader extends React.Component<Props, State> {
    state = {  }
    render() { 
        return ( 
                <div id="allallthethings">
                    <label ><p>Loading....</p></label>

                        <div id="allthethings">

                            <div id="lines"></div>

                            <div id="allpins">

                                <div id="pin1">
                                    <div className="top"></div>
                                    <div className="bottom"></div></div>

                                <div id="pin2">
                                    <div className="top"></div>
                                    <div className="bottom"></div></div>

                                <div id="pin3">
                                    <div className="top"></div>
                                    <div className="bottom"></div></div>

                                <div id="pin4">
                                    <div className="top"></div>
                                    <div className="bottom"></div></div>

                                <div id="pin5">
                                    <div className="top"></div>
                                    <div className="bottom"></div></div>

                                <div id="pin6">
                                    <div className="top"></div>
                                    <div className="bottom"></div></div>

                                <div id="pin7">
                                    <div className="top"></div>
                                    <div className="bottom"></div></div>

                                <div id="pin8">
                                    <div className="top"></div>
                                    <div className="bottom"></div></div>

                                <div id="pin9">
                                    <div className="top"></div>
                                    <div className="bottom"></div></div>

                                <div id="pin10">
                                    <div className="top"></div>
                                    <div className="bottom"></div></div>

                            </div>
                            <div id="lastball">
                                <div id="dot1"></div>
                                <div id="dot2"></div>
                                <div id="dot3"></div>
                                <div id="ball"></div>
                            </div>
                        </div>
    </div>
         );
    }
}