import styled from 'styled-components';


export const FriendWrapper = styled.ul`
margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  background-color: #ffe ;
  border: 1px solid #0505;
  cursor: pointer;

:hover {
  background-color: violet ;
  color: white;
}
`;

export const FriendsItem = styled.li`
display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px 10px 5px 20px;
border: 1px solid #0505;

`;
export const FriendOn = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;`;




export const FriendOff = styled.span`
 width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;`;


export const FriendImg = styled.img`
 width: 70px;
  border-radius: 4px;`;
export const FriendName = styled.h3`
font-size: 25px;
  font-weight: 700;
`;
