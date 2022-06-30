import { Text, View } from "react-native";
import style from "./style";

export default function Loading() {
    return (
        <View style={style.Container}>
            <View style={style.LoadingBox}>
                <Text style={style.LoadingIcon}>Carregando. . .</Text>
            </View>
        </View>
    );
}