import React, { Component } from 'react';
import BankSearch from './BankSearch';
import BankListView from './BankListView';
import { setup } from 'axios-cache-adapter';

import "../css/App.css";

class App extends Component {

    state = { data: [], city : 'BENGALURU' }

    async componentDidMount () {
        const response = await this.api.get('/banks?city=' + this.state.city);
        this.setState({
            data: response.data,
        });
    }

    api = setup({
        baseURL: 'https://vast-shore-74260.herokuapp.com',
        cache: {
            // Cache expiration in milliseconds, here 60 min
            maxAge: 60 * 60 * 1000,
            // Cache exclusion rules
            exclude: {
                query: false
            }
        }
    })

    onFilter = async value => {
        const response = await this.api.get('/banks?city=' + value)

        // to check if data is from cache or actual api call
        console.log(response.request.fromCache === true)
        this.setState({
            data: response.data,
            city : value
        })

    }

    render() {
        return (
            <div className="container">
                <div className="h3">Bank Search Application</div>
                <BankSearch onFilter={this.onFilter} />
                <BankListView data={this.state.data} city = {this.state.city} />
            </div>
        )
    }
}

export default App;