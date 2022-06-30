import { View, Text, Image } from "react-native";
import style from "./style";

export default function Header(){
    const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png';
    return (
        <View style={style.Container}>
            <View style={style.LogoBox}>
                <Image source={logoUrl} style={style.LogoImage} />
            </View>
        </View>
    );
}