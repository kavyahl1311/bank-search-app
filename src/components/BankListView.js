import React, { Component } from 'react';
import MaterialTable from 'material-table';

class BankListView extends Component {
    state = {
        favorite: false,
        arr: {
            BENGALURU: localStorage.getItem("BENGALURU") ? localStorage.getItem("BENGALURU").split(",") : [],
            DELHI: localStorage.getItem("DELHI") ? localStorage.getItem("DELHI").split(",") : [],
            PUNE: localStorage.getItem("PUNE") ? localStorage.getItem("PUNE").split(",") : [],
            CHENNAI: localStorage.getItem("CHENNAI") ? localStorage.getItem("CHENNAI").split(",") : [],
            MUMBAI: localStorage.getItem("MUMBAI") ? localStorage.getItem("MUMBAI").split(",") : []
        }
    }

    removeA(arrR) {
        var what, a = arguments, L = a.length, ax;
        while (L > 1 && arrR.length) {
            what = a[--L];
            while ((ax = arrR.indexOf(what)) !== -1) {
                arrR.splice(ax, 1);
            }
        }
        return arrR;
    }

    onCLickOfFavorite = (ifsc) => {
        let arr = { ...this.state.arr }
        if (arr[this.props.city].indexOf(ifsc) !== -1) {
            this.removeA(arr[this.props.city], ifsc)
        } else {
            arr[this.props.city].push(ifsc);
        }
        localStorage.setItem(this.props.city, arr[this.props.city]);
        this.setState({ arr })
    }

    render() {
        const titleName = "List of Banks in " + this.props.city
        return (
            <div className="ui container">
                <MaterialTable
                    title= {titleName}
                    columns={[
                        {
                            title: 'BANK NAME', field: 'bank_name'
                        },
                        {
                            title: 'IFSC', field: 'ifsc'
                        },
                        {
                            title: 'BANK ID', field: 'bank_id', type: 'numeric'
                        },
                        {
                            title: 'BRANCH', field: 'branch'
                        },
                        {
                            title: 'ADDRESS', field: 'address', hidden: true
                        },
                        {
                            title: 'CITY', field: 'city', hidden : true
                        },
                        {
                            title: 'DISTRICT', field: 'district', hidden: true
                        },
                        {
                            title: 'STATE', field: 'state', hidden: true
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
                            icon: this.state.arr[this.props.city].indexOf(rowData.ifsc) !== -1 ? 'favorite' : 'favorite_border',
                            tooltip: this.state.arr[this.props.city].indexOf(rowData.ifsc) !== -1 ? 'remove from favorite' : 'add to favorite',
                            onClick: (event, rowData) => {
                                this.onCLickOfFavorite(rowData.ifsc);
                            }
                        })]}
                />
            </div>
        )
    }
}

export default BankListView;