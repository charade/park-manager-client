import { usePlacesTableStyle } from '../assets/styles/index.styles';
import { useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state';

export const PlacesTable = () => {
    const classes = usePlacesTableStyle();
    const places = useSelector((store : ReducerRootStateType) => store.places);
    console.log(places)
    return(
        <div className = { classes.container }>
            <table className = { classes.table } aria-label = 'table-header'>
                <thead>
                    <tr className = { `${classes.row } ${ classes.headRow }`}>
                        <td className = { classes.cell }><span>N°</span></td>
                        <td className = { classes.cell }><span>Floor</span></td>
                        <td className = { classes.cell }><span>Reserve</span></td>
                    </tr>
                </thead>
            </table> 
            <div className = { classes.bodyContainer }>
                <table className = { classes.table } aria-label = 'table-body'>
                    <tbody>
                        { places.map((place, i )=> {
                            return(
                                <tr key = { `place-${place.id}-row`} className = { `${classes.row }`}>
                                    <td className = { classes.cell }><span>{ place.placeNumber }</span></td>
                                    <td className = { classes.cell }><span>{ place.floor }</span></td>
                                    <td className = { classes.cell }><span>{ '-' }</span></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
};