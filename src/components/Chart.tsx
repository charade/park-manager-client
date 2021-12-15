import { useChartStyles } from '../assets/styles/index.styles';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import { Area, XAxis, YAxis, AreaChart, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useMemo } from 'react';

export const Chart = ()=>{
    const classes = useChartStyles();

    const places = useSelector((store : ReducerRootStateType) => store.places)
    const occupancy = useMemo(() => places.map(place => {
        const occupancyTime = place.occupancyTime;
        const updatedAt = place.updatedAt;
        return {occupancyTime, updatedAt}

    }),[places]);

    return(
        <div className= { classes.container }>
            <ResponsiveContainer width = "100%" height = "100%" className = { classes.container }>
                <AreaChart data = {occupancy} margin = {{top : 10, left: -40, right : 20}}>
                    <defs>
                        <linearGradient id = 'gradient' x1 = "0" y1 = "0" x2 = '0' y2= "1">
                            <stop offset = '0' stopColor = '#E0A507' stopOpacity = { .7 }></stop>
                            <stop offset = '70%' stopColor = '#E0A507' stopOpacity = {.1}></stop>
                        </linearGradient>
                    </defs>

                    <Area dataKey = 'occupancyTime' stroke = '#E0A507' fill = 'url(#gradient)'/>

                    <XAxis 
                    axisLine = { false }
                    dataKey = "updatedAt" 
                    tickFormatter = {(str) => new Date(str).toLocaleTimeString() }
                    />

                    <YAxis
                    axisLine = { false }
                    dataKey = 'occupancyTime' 
                    tickLine = { false } 
                    tickFormatter = {(num) => (num * 60).toFixed(2)}
                    />

                    <CartesianGrid  opacity = {.3}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}