import React from 'react';
import user from './data/user.json';
import statistics from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import Profile from './components/Profile/Profile.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx'




const App = () => {
  return (
    <div className="App">
      <h1> Homework-1 React</h1>
      <h2>Task 1: Profile</h2>
      <Profile
        // user = {}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats = {user.stats}
        
      />

      <h2>Task 2: Statistic information</h2>
      <Statistics
        title='Upload stats'
        stats = {statistics}
      />
      <h2>Task 3: Friends list</h2>
      <FriendList
        friends={friends}
      />

      <h2>Task 4: Transactions</h2>
      <TransactionHistory
        transactions = {transactions}
      
      />

  
    </div>
  );
}

export default App;
