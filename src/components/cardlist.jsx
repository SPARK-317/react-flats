import React, { Component } from 'react';
import flats from '../../data/flats.js';

import Card from './card.jsx';

class CardList extends Component{

    renderList = (props) => {
        return this.props.flats.map(flat => {
            return <Card flat={flat} key={flat.name}/>
        })
    }



    render() {
        return (
            <div className="flat-list">
                {this.renderList()}
            </div>
        );
    }
}

export default CardList;