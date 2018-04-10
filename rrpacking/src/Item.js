import React from 'react';
import { DragSource } from 'react-dnd';

const Types = {
    ITEM: 'Item'
   }

   const itemSource = {
    beginDrag(props) {
    /* code here */
    console.log('Begin ' + props.name)
    const xyz = { id: props.id };
    return xyz;
    },
    endDrag(props) {
    /* code here */
    console.log('End ' +props.name)
    const qwe = { id: props.id };
    return qwe;
    }
   }
   
   function collect(connect, monitor) {
    return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
    }
   }

class Item extends React.Component{
    render(){
        const { isDragging, connectDragSource, src } = this.props;
        return connectDragSource(
            <div className="col-sm-12 itemz">
            <div className="col-sm-12">Name: {this.props.name}</div>
            <div className="col-sm-12">Weight: {this.props.weight}</div>
            </div>
        )
    }
}

export default DragSource(Types.ITEM, itemSource, collect)(Item)
/*
export default class Item extends React.Component{
    render(){
        return(
            
            <div className="col-sm-12 itemz">
            
            <div className="col-sm-12">Name: {this.props.name}</div>
            <div className="col-sm-12">Weight: {this.props.weight}</div>
            </div>
        )
    }
}
*/