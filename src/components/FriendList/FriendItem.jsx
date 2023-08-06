
export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li>
      {isOnline ? <span></span> : <span></span>}
      <img src={avatar} alt={name} width="48" />
      <h3>{name}</h3>
    </li>
  );
};