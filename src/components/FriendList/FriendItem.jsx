import { FriendsItem, FriendOn, FriendOff, FriendImg, FriendName } from "./FriendList.styled";


export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendsItem>
      {isOnline ? <FriendOn></FriendOn> : <FriendOff></FriendOff>}
      <FriendImg src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendsItem>
  );
};