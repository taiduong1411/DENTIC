/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { ApiClient } from '../../interceptors/axios';
import { Space, Table } from 'antd';


function Following() {
    const [state, setState] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        await ApiClient().get('all-user').then(res => {
            setState(
                res.data.record.map(row => ({
                    Name: row.fullname,
                    Email: row.email,

                }))
            );

        }).catch(err => {
        })
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            render: (text) => <a>{text}</a>,
        },

        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return <Table columns={columns} dataSource={state} />;

}
export default Following;