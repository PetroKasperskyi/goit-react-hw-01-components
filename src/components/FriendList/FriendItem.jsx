import PropTypes from 'prop-types';

import {
  FriendsItem,
  FriendOn,
  FriendOff,
  FriendImg,
  FriendName
} from "./FriendList.styled";


export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendsItem>
      {isOnline ? <FriendOn></FriendOn> : <FriendOff></FriendOff>}
      <FriendImg src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendsItem>
  );
};


FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};