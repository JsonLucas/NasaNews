import { Text, View, ActivityIndicator } from "react-native";
import style from "./style";

export default function Loading() {
    return (
        <View style={style.Container}>
            <View style={style.LoadingBox}>
                <ActivityIndicator size='large' color='darkblue' />
            </View>
        </View>
    );
}