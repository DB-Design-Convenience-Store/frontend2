import React from 'react';
import { PlusOutlined, ExclamationOutlined } from '@ant-design/icons';
import { mins } from './Billing.icon';

export const data = [
  {
    title: 'March, 01, 2021',
    description: '#MS-415646',
    amount: '$180',
  },
  {
    title: 'February, 12, 2021',
    description: '#RV-126749',
    amount: '$250',
  },
  {
    title: 'April, 05, 2020',
    description: '#FB-212562',
    amount: '$550',
  },
  {
    title: 'June, 25, 2019',
    description: '#QW-103578',
    amount: '$400',
  },
  {
    title: 'March, 03, 2019',
    description: '#AR-803481',
    amount: '$700',
  },
];

export const information = [
  {
    title: 'Oliver Liam',
    description: 'Viking Burrito',
    address: 'oliver@burrito.com',
    vat: 'FRB1235476',
  },
  {
    title: 'Lucas Harper',
    description: 'Stone Tech Zone',
    address: 'lucas@syone-tech.com',
    vat: 'FRB1235476',
  },
  {
    title: 'Oliver Liam',
    description: 'ethan@fiber.com',
    vat: 'NumberFRB1235476',
  },
];

export const newest = [
  {
    headding: <h6>NEWEST</h6>,
    avatar: mins,
    title: 'Netflix',
    description: '27 March 2021, at 12:30 PM',
    amount: '- $2,500',
    textclass: 'text-light-danger',
    amountcolor: 'text-danger',
  },
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: 'Apple',
    description: '27 March 2021, at 04:30 AM',
    amount: '+ $2,000',
    textclass: 'text-fill',
    amountcolor: 'text-success',
  },
];

export const yesterday = [
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: 'Stripe',
    description: '26 March 2021, at 12:30 AM',
    amount: '+ $750',
    textclass: 'text-fill',
    amountcolor: 'text-success',
  },
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: 'HubSpot',
    description: '26 March 2021, at 11:30 AM',
    amount: '+ $1,050',
    textclass: 'text-fill',
    amountcolor: 'text-success',
  },
  {
    avatar: <PlusOutlined style={{ fontSize: 10 }} />,
    title: 'Test',
    description: '26 March 2021, at 07:30 AM',
    amount: '+ $2,400',
    textclass: 'text-fill',
    amountcolor: 'text-success',
  },
  {
    avatar: <ExclamationOutlined style={{ fontSize: 10 }} />,
    title: 'Webflow',
    description: '26 March 2021, at 04:00 AM',
    amount: 'Pending',
    textclass: 'text-warning',
    amountcolor: 'text-warning-b',
  },
];
