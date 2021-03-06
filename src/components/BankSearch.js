import React, { Component } from 'react';

class BankSearch extends Component {
    state = { filterValue: '' };

    onFilterChange = (event) => {

        let fVal = event.target.value
        this.setState({
            filterValue: fVal
        }, () => { this.props.onFilter(this.state.filterValue) })

    }

    render() {
        return (
            <div className="ui container">
                <select className="ui fluid search selection dropdown" onChange={this.onFilterChange} >
                    <option value="BENGALURU">BENGALURU</option>
                    <option value="MUMBAI">MUMBAI</option>
                    <option value="CHENNAI">CHENNAI</option>
                    <option value="DELHI">DELHI</option>
                    <option value="PUNE">PUNE</option>
                </select>
            </div>
        )
    }
}

export default BankSearch;