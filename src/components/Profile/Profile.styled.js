import styled from 'styled-components';


export const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
margin-bottom: 20px;
width: 400px;
background-color:#ffe;
`;

export const ProfileDescription = styled.div`
display: flex;
text-align: center;
justify-content: center;
flex-direction: column;
gap: 20px;
padding: 20px;

border: 1px solid #0505;`;

export const ProfileImage = styled.img`
  display: block;
  width: 200px;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;`;


export const ProfileName = styled.p`
 color: #104406;
 font-size: 25px;
  font-weight: 700;
 `;

export const ProfileTag = styled.p`
 color: #104406;
 `;

export const ProfileLocation = styled.p`
color: #104406;
font-weight: 700;
`;

export const ProfileList = styled.ul`
margin: 0;
  padding: 0;
  display: flex;
  text-align: center;`;

export const ProfileItem = styled.li`
padding-top: 10px;
  padding-bottom: 10px;
  width: calc(100% / 3);
  border: 1px solid #0505;
 background-color:#ffe;`;

export const ProfileSubtitle = styled.span`
color: #104406;
  display: block;`;

export const ProfileStats = styled.span`
color: #104406;
font-weight: 700;`;


