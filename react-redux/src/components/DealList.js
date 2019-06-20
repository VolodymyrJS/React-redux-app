import React from 'react';
import DealItem from './DealItem';

export default class DealList extends React.Component {
    render() {
        return(
            <div>
                <DealItem />
                <DealItem />
                <DealItem />
                <DealItem />
            </div>
        )
    }
}
