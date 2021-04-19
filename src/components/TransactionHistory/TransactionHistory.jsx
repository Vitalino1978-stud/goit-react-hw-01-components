import React from 'react'
import Transaction from '../Transaction/Transaction'
import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'

const TransactionHistory = ({ transactions }) => (

  <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
      {transactions.map(transaction => {
        const {type, amount, currency, id} = transaction
        return <tr key = {id}>
          <Transaction
          type={type}
          amount={amount}
          currency={currency}
        
        
      />
        </tr>
      })}
      
      </tbody>
</table>

)

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired}).isRequired
  ).isRequired

}

export default TransactionHistory;