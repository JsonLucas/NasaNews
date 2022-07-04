import { TouchableOpacity, View } from "react-native";
import style from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faListDots } from '@fortawesome/free-solid-svg-icons/faListDots';

export default function Footer() {
    return (
        <View style={style.Container}>
            <TouchableOpacity style={style.BoxIcon}>
                <FontAwesomeIcon icon={faHome} size={20} color='white' />
            </TouchableOpacity>
            <TouchableOpacity style={style.BoxIcon}>
                <FontAwesomeIcon icon={faStar} size={20} color='white' />
            </TouchableOpacity>
            <TouchableOpacity style={style.BoxIcon}>
                <FontAwesomeIcon icon={faListDots} size={20} color='white' />
            </TouchableOpacity>
        </View>
    );
}