import React from 'react';
import Box from './Box';

export default class BoxList extends React.Component {
    render() {
        let copy = Array.from(this.props.boxList);
        let boxJSX = copy.map((boxes, index) => {
            return (
                <Box name={boxes.name} total_allowed_weight={boxes.total_allowed_weight} key={boxes.id} />
            )
        });

        return (
            <div className="col-sm-4"><h2>Box List</h2>
                {boxJSX}
            </div>
        )
    }
}