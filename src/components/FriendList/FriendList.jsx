import React from 'react';
import PropTypes from 'prop-types'
import FriendListItem from '../FriendListItem/FriendListItem'
import css from '../FriendListItem/FriendListItem.module.css'

const FriendList = ({ friends }) => (
  
  <ul className={css.friendList}>
    {friends.map(friend => <li className={css.item} key={friend.id}>
      <FriendListItem
        isOnline={friend.isOnline}
        name={friend.name}
        avatar = {friend.avatar}
      />
    </li>)}
  
</ul>

)

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired }
    ).isRequired,
  ).isRequired,
}

export default FriendList;
