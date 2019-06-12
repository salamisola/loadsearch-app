import React, { Component } from 'react';
import {
    BootstrapTable,
    TableHeaderColumn
} from 'react-bootstrap-table';
/* import Jumbotron from './Jumbotron'; */
import './Table.css';
/* import './../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'; */

class Table extends Component {

    render() {
        return (
            <div>
                <BootstrapTable data={this.props.data} headerStyle={{ background: '#ffffff', color: '#000000' }} tableStyle={{ background: '#ffffff', color: '#000000' }}>
                    <TableHeaderColumn isKey dataField='rate'
                        dataAlign='center'
                        width="15%"
                        headerAlign="center"
                        width="15%"
                        thStyle={
                            { backgroundColor: 'white' }}>
                        Rate Per Mile
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='radius'
                        dataAlign='center'
                        width="15%"
                        headerAlign="center"
                        width="15%"
                        thStyle={
                            { backgroundColor: 'white' }}>
                        Radius
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='destination'
                        dataAlign='center'
                        width="20%"
                        headerAlign="center"
                        width="20%"
                        thStyle={
                            { backgroundColor: 'white' }}>
                        Destination
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='equipment'
                        dataAlign='center'
                        width="20%"
                        headerAlign="center"
                        width="20%"
                        thStyle={
                            { backgroundColor: 'white' }}>
                        Equipment
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='rate_total'
                        dataAlign='center'
                        width="15%"
                        headerAlign="center"
                        width="15%"
                        thStyle={
                            { backgroundColor: 'white' }}>
                        Total Rate
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='distance'
                        dataAlign='center'
                        width="15%"
                        headerAlign="center"
                        width="15%"
                        thStyle={
                            { backgroundColor: 'white' }}>
                        Distance
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default Table;