import { useAvarStyle } from '../assets/styles/index.styles';

interface StyleProp{
    root ?:string,
    img ?: string
    placeholder ?: string
}
type AvatarProps = {
    classes ?: StyleProp
    src ?: string
    placeholder ?: string
    alt ?: string
};

export const Avatar = ({ classes, src, placeholder, alt } : AvatarProps) => {
    const styled = useAvarStyle();

    return(
        <div className = { `${styled.box} ${classes?.root}` }>
            {src ? 
            <img src = { src } alt = { alt } className = { `${styled.img} ${classes?.img }` }/> 
            :
            <h3 className = {classes?.placeholder || styled.placehoder }> 
                { placeholder?.charAt(0) || '' } 
            </h3>
            }
        </div>
    )
}