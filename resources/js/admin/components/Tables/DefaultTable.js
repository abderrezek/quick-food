import React, { useMemo } from 'react'
import { useTable } from "react-table"
import { Table } from "react-bootstrap"

const DefaultTable = ({ columns, data }) => {
    if (data === null || columns === null) {
        console.error('data or columns table is null');
        return null
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <Table striped bordered hover {...getTableProps()}>
            <thead>
                {headerGroups && headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(col => (
                                <th {...col.getHeaderProps()}>
                                    {col.render('Header')}
                                </th>
                            ))
                        }
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows && rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                            row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })
                            }
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
};

export default DefaultTable;