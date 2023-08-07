import PropTypes from 'prop-types';

import { FriendItem } from "./FriendItem"
import { FriendWrapper } from "./FriendList.styled"


export const FriendList = ({ friends }) => {
    return (
        <FriendWrapper>
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
        </FriendWrapper>
    )
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};