import { useAvarStyle } from '../assets/styles/index.styles';
import { motion } from "framer-motion";

interface StyleProp{
    root ?:string,
    img ?: string
    placeholder ?: string
};
type AvatarProps = {
    classes ?: StyleProp
    src ?: string
    placeholder ?: string
    alt ?: string,
    layout ?: boolean
};

export const Avatar = ({ classes, src, placeholder, alt, layout = false } : AvatarProps) => {
    const styled = useAvarStyle();

    return(
        <motion.div layout = { layout } className = { `${styled.box} ${classes?.root}` }>
            {src ? 
            <img src = { src } alt = { alt } className = { `${styled.img} ${classes?.img }` }/> 
            :
            <h3 className = {classes?.placeholder || styled.placehoder }> 
                { placeholder?.charAt(0) || '' } 
            </h3>
            }
        </motion.div>
    )
}