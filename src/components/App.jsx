import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';


export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics  title="Upload stats" stats={data}/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </>
  );
};
