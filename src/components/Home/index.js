import { View, Image } from "react-native";
import style from './style';

export default function Home(){
    const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png';
    return (
        <View style={style.Container}>
            <View style={style.SectionBox}>
                <Image source={logoUrl} style={{width: '100%', height: '100%'}} />
            </View>
        </View>
    );
}