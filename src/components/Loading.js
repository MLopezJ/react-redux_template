import React from 'react';
import { Progress } from 'reactstrap';

const LoadingComponent = () => {
    return (
        <div className="text-center login-margin">
            <h2>Loading ...</h2>
            <Progress animated color="info" value="100" />
        </div>
    );
};

export default LoadingComponent;