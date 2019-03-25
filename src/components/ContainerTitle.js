import React, {Component} from 'react';
import {PropTypes} from 'prop-types';


class ContainerTitleComponent extends Component {

    render() {
        console.log(this.props)
        return(
            <div className="row w-100">
                <div className="col-6"><p className="display-4 text-left">{this.props.title}</p></div>
            </div>
        )
    }
}

ContainerTitleComponent.propTypes = {
    
    title : PropTypes.string.isRequired,
    
};

export default ContainerTitleComponent;