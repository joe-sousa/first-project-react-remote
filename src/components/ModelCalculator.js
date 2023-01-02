import React from 'react';

export default class ModelCalculator extends React.Component {
    constructor(props) {

        super(props);
        this.state = { num1: '', num2: '' };

    }

    somaTotal = () => {
        this.setState({ total: parseInt(this.state.num1) + parseInt(this.state.num2) })
        console.log(this.state)
    }

    render() {
        return (
            <div className="mainContainer">

                <input type="text" className="inputStyle" value={this.state.num1} onChange={(e) => { this.setState({ num1: e.target.value }) }} />
                <input type="text" className="inputStyle" value={this.state.num2} onChange={(e) => { this.setState({ num2: e.target.value }) }} />
                <br /><br />

                <button onClick={() => { this.somaTotal() }} > + </button>
                <br />

                <h5>{this.state.total}</h5>
                <br /><br />
            </div>

        );
    }

}
