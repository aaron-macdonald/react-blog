import React from 'react'
import { Link } from 'react-router-dom'

function Table (props) {
  const {playerTable} = props
  return (
    <div className='table'>
      <div className='row valign-wrapper'>
        <h4 className='col s12'>Table</h4>
      </div>
      <table className="striped centered">
        <thead>
          <tr>
            <th><h5>Knickname</h5></th>
            <th><h5>Played</h5></th>
            <th><h5>Buyins</h5></th>
            <th><h5>Rebuys</h5></th>
            <th><h5>Addons</h5></th>
            <th><h5>Prizemoney</h5></th>
            <th><h5>Profit/Loss</h5></th>
          </tr>
        </thead>
        <tbody>
          {playerTable.map(player => {
            const {knickName, played, buyin, rebuys, addons, prizeMoney, profitLoss} = player
            return <tr key={knickName}>
              <td><h5>{knickName}</h5></td>
              <td><h5>{played}</h5></td>
              <td><h5>{buyin}</h5></td>
              <td><h5>{rebuys}</h5></td>
              <td><h5>{addons}</h5></td>
              <td><h5>{prizeMoney}</h5></td>
              <td><h5>{profitLoss}</h5></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Table
