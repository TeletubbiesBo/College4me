import React ,  { useState, useEffect } from 'react';
// import axios from "axios";
// import { useLocation,useHistory} from "react-router-dom";
import { Typography} from 'antd';
// import { Card, Avatar } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// import { Divider } from 'antd';
// import HighschoolImg from '../images/highschool.jpg';
// import RankingImg from '../images/college_rank.jpg';
// import UProfpic from '../images/prof.png';
// import AppTrack from '../images/app_track.png';
// const { Meta } = Card;
// const { Title, Paragraph } = Typography;

import { Table, Tag} from 'antd';
const { Title, Paragraph } = Typography;

function MatchingStudentsList(props) {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'High School',
          dataIndex: 'High School',
          key: 'High School',
        },
        {
          title: 'GPA',
          dataIndex: 'GPA',
          key: 'GPA',
        },
        {
          title: 'Email',
          key: 'Email',
          dataIndex: 'tags',
          render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
        {
          title: 'UseId',
          key: 'UseId',
          render: (text, record) => (
            <span>
              <a style={{ marginRight: 16 }}>Invite {record.name}</a>
              <a>Delete</a>
            </span>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];

      return (
        <div>
            <Title>Check List of Matching Student Profiles</Title>
            <Table columns={columns} dataSource={data} />
        </div>
    );
   }

export default MatchingStudentsList; 