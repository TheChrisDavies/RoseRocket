import React from 'react';
import Item from './Item';

export default class ItemsList extends React.Component {
    render() {
        let copy = Array.from(this.props.itemList);
        let itemJSX = copy.map((items, index) => {
            return (
                <Item name={items.name} weight={items.weight} key={items.id} />
            )
        });

        return (
            <div className="col-sm-4">
            <h2>Item List</h2>
                {itemJSX}
            </div>
        )
    }
}