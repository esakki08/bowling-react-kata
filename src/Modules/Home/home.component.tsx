import * as React from 'react';
import { PlayButton } from './Components';
import { BannerFrame } from './Components'


export interface Props {
    
}
 
export interface State {
    
}
 
export class Home  extends React.Component<Props, State> {
    state = {   }
    render() { 
        return (<React.Fragment>
            <BannerFrame />
            <PlayButton />
        </React.Fragment> );
    }
}