import React, { Component } from 'react';
import BankSearch from './BankSearch';
import BankListView from './BankListView';
import axios from 'axios';

class App extends Component {

    state = { data: [] }
    
    componentDidMount() {
        let url ='https://vast-shore-74260.herokuapp.com/banks?city=BENGALURU'
        axios.get(url)
        .then(response => {

        this.setState({ 
            data :response.data,
        });
    })
 }

    onFilter = async value => {
        const response = await axios.get('https://vast-shore-74260.herokuapp.com/banks', {
            params: {
                city: value
            }
        });
        this.setState({
            data: response.data
        })

    }

    render() {
        return (
            <div>
                <BankSearch onFilter={this.onFilter} />
                <BankListView data={this.state.data} />
            </div>
        )
    }
}

export default App;