import React, { Component } from 'react';
import MaterialTable from 'material-table';

class BankListView extends Component {

    render() {
        return (
            <MaterialTable
                title="Bank Search App"
                columns={[
                    {
                        title: 'BANK NAME', field: 'bank_name', headerStyle: {
                            backgroundColor: '#039be5',
                        },
                    },
                    {
                        title: 'IFSC', field: 'ifsc', headerStyle: {
                            backgroundColor: '#039be5',
                        }
                    },
                    {
                        title: 'BANK ID', field: 'bank_id', type: 'numeric', headerStyle: {
                            backgroundColor: '#039be5',
                        }
                    },
                    {
                        title: 'BRANCH', field: 'branch', headerStyle: {
                            backgroundColor: '#039be5',
                        }
                    },
                    {
                        title: 'ADDRESS', field: 'address', headerStyle: {
                            backgroundColor: '#039be5',
                        }
                    },
                    {
                        title: 'CITY', field: 'city', headerStyle: {
                            backgroundColor: '#039be5',
                        }
                    },
                    {
                        title: 'DISTRICT', field: 'district', headerStyle: {
                            backgroundColor: '#039be5',
                        }
                    },
                    {
                        title: 'STATE', field: 'state', headerStyle: {
                            backgroundColor: '#039be5',
                        }
                    }
                ]}
                data={this.props.data}
                options={{
                    search: true,
                    exportButton: true,
                    grouping: true
                }}
            />
        )
    }
}

export default BankListView;