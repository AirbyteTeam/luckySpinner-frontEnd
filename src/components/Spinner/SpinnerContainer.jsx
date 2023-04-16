import React from 'react';
import Spinner from './Spinner'



class SpinnerContainer extends React.Component{


    render(){
        return (
            <div className="main-background">
                <div className="SpinnerSection">
                    <Spinner />
                </div>
            </div>
        );
    }
}

export default SpinnerContainer;