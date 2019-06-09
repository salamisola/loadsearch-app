import React, { Component } from 'react';
import {
    BootstrapTable,
    TableHeaderColumn
} from 'react-bootstrap-table';
import '../css/Table.css';
import './../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';


class Table extends Component {
    render() {
        return (
            <div>
                <BootstrapTable data={this.props.data}>
                    <TableHeaderColumn dataField='rate'>
                        Rate
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='equipment'>
                        Equipment
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='distance'>
                        Distance
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default Table;