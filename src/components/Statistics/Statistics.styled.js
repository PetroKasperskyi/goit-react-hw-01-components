import styled from 'styled-components';


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
width: 500px;
margin-bottom: 20px;
background-color:#ffe;
border: 1px solid #0505;
`;
export const StatisticTitle = styled.h2`
text-align: center;
padding-top: 15px;
text-transform: uppercase;`;


export const StatisticList = styled.ul`
display: flex;
 margin: 0;
 padding: 0;
`;

export const StatisticItem = styled.li`
display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: calc(100% / 5);
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #0505;
  background-color: ${getRandomHexColor};
`;
export const StatisticLable = styled.span`
color : #ffe;`;
export const StatisticPercentage = styled.span`
color : #ffe;
 font-size: 25px;
  font-weight: 700;`;

