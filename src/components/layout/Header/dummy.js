import React from 'react';
import { Avatar } from 'antd';
import avtar from '../../../assets/images/team-2.jpg';
import { clockicon, wifi, credit } from './icons';

export const data = [
  {
    title: 'New message from Sophie',
    description: <>{clockicon} 2 days ago</>,

    avatar: avtar,
  },
  {
    title: 'New album by Travis Scott',
    description: <>{clockicon} 2 days ago</>,

    avatar: <Avatar shape="square">{wifi}</Avatar>,
  },
  {
    title: 'Payment completed',
    description: <>{clockicon} 2 days ago</>,
    avatar: <Avatar shape="square">{credit}</Avatar>,
  },
];
