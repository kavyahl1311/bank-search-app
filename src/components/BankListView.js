import React, { Component } from 'react';
import MaterialTable from 'material-table';

class BankListView extends Component {

    render() {
        return (
            <MaterialTable
                title="Bank Search App"
                columns={[
                    { title: 'IFSC', field: 'ifsc' },
                    { title: 'BANK ID', field: 'bank_id', type:'numeric' },
                    { title: 'BRANCH', field: 'branch' },
                    { title: 'ADDRESS', field: 'address', },
                    { title: 'CITY', field: 'city', },
                    { title: 'DISTRICT', field: 'district', },
                    { title: 'STATE', field: 'state', },
                    { title: 'BANK NAME', field: 'bank_name', },
                ]}
                data={this.props.data}
                options={{
                    search: true
                }}
            />
        )
    }
}

export default BankListView;