import PropTypes from 'prop-types';
import { ProfileContainer, ProfileDescription, ProfileImage, ProfileLocation, ProfileTag, ProfileName, ProfileList, ProfileItem, ProfileSubtitle, ProfileStats } from "./Profile.styled";

export const Profile = ({ user }) => {
    const {
        username,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
    } = user;
    
    return (
        <ProfileContainer >
            <ProfileDescription>
                <ProfileImage
                    src={avatar}
                    alt={username}
      
                />
                <ProfileName>{username}</ProfileName>
                <ProfileTag > @{tag} </ProfileTag>
                <ProfileLocation > {location} </ProfileLocation>
            </ProfileDescription>

            <ProfileList>
                <ProfileItem>
                    <ProfileSubtitle>Followers</ProfileSubtitle>
                    <ProfileStats > {followers} </ProfileStats>
                </ProfileItem>
                <ProfileItem>
                    <ProfileSubtitle>Views</ProfileSubtitle>
                    <ProfileStats > {views} </ProfileStats>
                </ProfileItem>
                <ProfileItem>
                    <ProfileSubtitle >Likes</ProfileSubtitle>
                    <ProfileStats > {likes} </ProfileStats>
                </ProfileItem>
            </ProfileList>
        </ProfileContainer>
    )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};