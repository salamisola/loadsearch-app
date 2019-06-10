import React, { Component } from 'react';
import {
    BootstrapTable,
    TableHeaderColumn
} from 'react-bootstrap-table';
import Jumbotron from './Jumbotron';
import './Table.css';
/* import './../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'; */


class Table extends Component {
    render() {
        return (
            <div>
                <BootstrapTable data={this.props.data}>
                    <TableHeaderColumn isKey dataField='rate'
                        dataAlign='center'
                        headerAlign="left"
                        width="30"
                        tdStyle={
                            { backgroundColor: 'white' }} >
                        Rate
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='equipment'
                        dataAlign='center'
                        headerAlign="left"
                        width="30"
                        tdStyle={
                            { backgroundColor: 'white' }}>
                        Equipment
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='distance'
                        dataAlign='center'
                        headerAlign="left"
                        width="30"
                        tdStyle={
                            { backgroundColor: 'white' }}>
                        Distance
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default Table;