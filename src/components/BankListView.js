import React, { Component } from 'react';
import MaterialTable from 'material-table';

class BankListView extends Component {
    state = {
        arr: {
            BENGALURU: localStorage.getItem("BENGALURU") ? localStorage.getItem("BENGALURU") : "",
            DELHI: localStorage.getItem("DELHI") ? localStorage.getItem("DELHI") : "",
            PUNE: localStorage.getItem("PUNE") ? localStorage.getItem("PUNE") : "",
            CHENNAI: localStorage.getItem("CHENNAI") ? localStorage.getItem("CHENNAI") : "",
            MUMBAI: localStorage.getItem("MUMBAI") ? localStorage.getItem("MUMBAI") : ""
        }
    }

    onCLickOfFavorite = (ifsc) => {
        let arr = { ...this.state.arr }
        arr[this.props.city] += ifsc;
        localStorage.setItem(this.props.city, arr[this.props.city]);
        this.setState({ arr })
    }
    render() {
        return (
            <div className="ui container">
                <MaterialTable
                    title="Bank List"
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
                            }, hidden: true
                        },
                        {
                            title: 'CITY', field: 'city', headerStyle: {
                                backgroundColor: '#039be5',
                            }, hidden: true
                        },
                        {
                            title: 'DISTRICT', field: 'district', headerStyle: {
                                backgroundColor: '#039be5',
                            }, hidden: true
                        },
                        {
                            title: 'STATE', field: 'state', headerStyle: {
                                backgroundColor: '#039be5',
                            }, hidden: true
                        }
                    ]}
                    data={this.props.data}
                    options={{
                        search: true,
                        exportButton: true,
                        columnsButton: true
                    }}
                    actions={[
                        rowData => ({
                            icon: 'favorite',
                            tooltip: 'favorite Bank',
                            onClick: (event, rowData) => {

                                this.onCLickOfFavorite(rowData.ifsc);

                            },
                            disabled: this.state.arr[this.props.city].indexOf(rowData.ifsc) !== -1
                        })]}
                />
            </div>
        )
    }
}

export default BankListView;