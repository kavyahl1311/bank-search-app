import React, { Component } from 'react';
import BankSearch from './BankSearch';
import BankListView from './BankListView';
import axios from 'axios';

class App extends Component {

    state = { data : [] }

    
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
        return(
            <div>
                <BankSearch onFilter={this.onFilter}/>
                <BankListView data = {this.state.data}/>
            </div>
        )
    }
}

export default App;