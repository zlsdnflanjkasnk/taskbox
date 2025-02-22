import React, { ReactNode } from 'react';
import './Table.css';

interface TableProps {
  children: ReactNode;
  disabled?: boolean;
}

export const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return <table className={`table ${disabled ? 'table-disabled' : ''}`}>{children}</table>;
};

interface TableHeaderProps {
  children: ReactNode;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return <thead className="table-header">{children}</thead>;
};

interface TableRowProps {
  children: ReactNode;
}

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr className="table-row">{children}</tr>;
};

interface TableCellProps {
  children: ReactNode;
  header?: boolean;
}

export const TableCell: React.FC<TableCellProps> = ({ children, header = false }) => {
  return header ? <th className="table-cell table-header-cell">{children}</th> : <td className="table-cell">{children}</td>;
};

interface TableFooterProps {
  children: ReactNode;
}

export const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <tfoot className="table-footer">{children}</tfoot>;
};
