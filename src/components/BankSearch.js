import React, { Component } from 'react';

class BankSearch extends Component {
    state = { filterValue: '' };

    onFilterChange = (event) => {
        //event.preventDefault();
        let fVal = event.target.value
        console.log(fVal)
        this.setState({
            filterValue:fVal
        },() => {this.props.onFilter(this.state.filterValue)})
        //console.log(this.state.filterValue)
        //this.props.onFilter(this.state.filterValue);
    }

    render() {
        return (
            <div >
                <select className="ui search dropdown" onChange={this.onFilterChange} >
                    <option value="">City</option>
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