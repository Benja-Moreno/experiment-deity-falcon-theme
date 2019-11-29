import React from 'react';


export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { isOpen, toggle } = this.props;
        if (isOpen) {
            return (
                <button onClick={toggle}>OPEN</button>
            )
        } else {
            return <button onClick={toggle}>CLOSE</button>;
        }
    }
}