import { FriendItem } from "./FriendItem"
export const FriendList = ({ friends }) => {
    return (
        <ul>
            {
                friends.map(({ id, name, avatar, isOnline }) => {
                    return (
                        <FriendItem
                            key={id}
                            name={name}
                            avatar={avatar}
                            isOnline={isOnline}
                        />
                    )
                })
            }
        </ul>
    )
}