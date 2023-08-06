import {
    StatisticWrapper,
    StatisticTitle,
    StatisticList,
    StatisticItem,
    StatisticLable,
    StatisticPercentage
} from "./Statistics.styled"



export const Statistics = ({ title, stats }) => {
    return (
        <StatisticWrapper >
            <StatisticTitle>{ title}</StatisticTitle>

            <StatisticList >
                {stats.map(({ id, label, percentage }) => {
                    return (<StatisticItem key={id}>
                        <StatisticLable>{label}</StatisticLable>
                        <StatisticPercentage>{percentage}%</StatisticPercentage>
                    </StatisticItem>)
                }
                )}
           </StatisticList>
       </StatisticWrapper>
    )
}