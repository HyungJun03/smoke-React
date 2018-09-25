import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import sum from "lodash.sum";
import { makeDateSexy } from "../../utils";
import {
  Card,
  BlocksHeader,
  BlocksRow,
  TxHeader,
  TxRow
} from "../../Components/Shared";

const TableContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
`;

const HomePresenter = ({ blocks, transactions }) => (
  <Fragment>
    <TableContainer>
      <h2>가장 최근의 5개의 블록</h2>
      <Card>
        <BlocksHeader />
        {blocks.map((block, index) => (
          <BlocksRow
            index={block.index}
            hash={block.hash}
            timestamp={makeDateSexy(block.timestamp)}
            difficulty={block.difficulty}
            key={index}
          />
        ))}
      </Card>
    </TableContainer>
    <TableContainer>
      <h2>Latest Transactions</h2>
      <Card>
        <TxHeader />
        {transactions.map((transactions, index) => (
            <TxRow
            timestamp={makeDateSexy(transactions.timestamp)}
            id={transactions.id}
            insOuts={`${transactions.txIns}/${transactions.txOuts}`}
            amount={"a"}
            key={index}
          />
        ))}
      </Card>
    </TableContainer>
  </Fragment>
);

HomePresenter.propTypes = {
  blocks: PropTypes.array.isRequired,
  transactions: PropTypes.array.isRequired
};

export default HomePresenter;