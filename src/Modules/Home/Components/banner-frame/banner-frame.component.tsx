import * as React from 'react';
import banner from '../../../../Assests/banner_home.png'
import './banner-frame.css'

export interface Props {
    
}
 
export interface State {
    
}
 
export class BannerFrame  extends React.Component<Props, State> {
    state = {   }
    render() { 
        return (<div>
            <h1 className="title">American Bowling</h1>
            <img src={banner} alt="banner-frame" className="banner-frame" />
        </div>  );
    }
}