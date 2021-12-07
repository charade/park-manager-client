import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';
import { useSelectFloorsStyle } from '../assets/styles/index.styles';
import React, { useCallback, useEffect,useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { variants } from '../assets/utils';
import { bindActionCreators } from 'redux';
import { placesActionCreators } from '../state/actions-creators';
import { useDispatch } from 'react-redux';
import { getFloors } from '../utils/functions';

export const SelectFloor = () => {
    const places = useSelector((store : ReducerRootStateType) => store.places);
    const [ floors, setFloors ] = useState<number[]>([]);
    const dispatch = useDispatch();
    const { filterByFloor } = bindActionCreators(placesActionCreators, dispatch);
    const { loadPlaces } = bindActionCreators(placesActionCreators, dispatch);
    const classes = useSelectFloorsStyle();
    //save floor real time for admin user when creating a place
   useEffect(() => {
       const localFloors = localStorage.getItem('floors');
       let tmp : number[] = [];
       if(localFloors){
            const savedFloors = JSON.parse(localFloors);
            if(places.length >= savedFloors.length){
                //only affect floors on creating a new place
                tmp = [...getFloors(places)] as number[];
                localStorage.setItem('floors', JSON.stringify(tmp));
            }
            else{
                //if places filtered so we get floors from local storage
                //in order to keep on requesting
                tmp = [...savedFloors] ;
            }
            setFloors(tmp);
           return;
       };
       //on the very first rendering save 
       const savingFloors = getFloors(places) as number[];
       savingFloors.length && localStorage.setItem('floors', JSON.stringify(savingFloors));
       setFloors(savingFloors);
   },[places])

    //select on Click
    const handleSelectFloor = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as HTMLLIElement;
        const floor = Number(target.value);
        filterByFloor(floor);
    },[filterByFloor]);

    return(
        <AnimatePresence>
            <motion.ul 
            variants = { variants.selectFloors } 
            animate = 'open'
            initial = 'close'
            className = { classes.container }
            >
                { floors.length && 
                <li className = { classes.item } onClick = { loadPlaces }>all</li> 
                }
                {floors.sort((a, b) => a! - b!).map((floor, i) => {
                    return(
                        <li 
                        onClick = { handleSelectFloor }
                        key = { i } 
                        className = { classes.item } 
                        value = { floor }>
                            { floor }
                        </li>
                    )
                })}
            </motion.ul>
        </AnimatePresence>
    )
}