import { useUpdateAvatarFieldStyle } from '../assets/styles/index.styles';
import Photo from '../assets/images/photo.png';

type UpdateAvatarProps = {
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const UpdateAvatarField = ({ onChange } : UpdateAvatarProps) => {
    const classes = useUpdateAvatarFieldStyle();

    return(
        <label className = { classes.container }>
            <input 
            hidden 
            onChange = { onChange }
            type = 'file' 
            name = 'avatar' 
            accept = 'image/png, image/jpeg' 
            />

            <img src = { Photo } alt = 'change-avatar' className = { classes.icon } />
            
            Update avatar
        </label>
    )
}