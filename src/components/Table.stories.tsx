import React from 'react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
};

const Template = (args) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableCell header>Name</TableCell>
        <TableCell header>Age</TableCell>
        <TableCell header>Country</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>asd</TableCell>
        <TableCell>60</TableCell>
        <TableCell>First Country</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>asasrs</TableCell>
        <TableCell>70</TableCell>
        <TableCell>Second Country</TableCell>
      </TableRow>
    </tbody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>End of Table</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Enabled = Template.bind({});
Enabled.args = { disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
