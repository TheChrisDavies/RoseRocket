import React from 'react';

export default class Box extends React.Component{
    render(){
        return(
            <div className="col-sm-12 boxz">
            <div className="col-sm-12">{this.props.name}</div>
            <div className="col-sm-12">Total Weight: {this.props.total_allowed_weight}</div>
            <div className="col-sm-12">Used Weight: </div>
            </div>
        )
    }
}