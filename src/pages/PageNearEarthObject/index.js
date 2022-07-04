import { SafeAreaView } from "react-native";
import NearEarthObjectsList from "../../components/NearEathObjectsList";
import style from "./style";

export default function PageNearEarthObject() {
    return (
        <SafeAreaView style={style.Container}>
            <NearEarthObjectsList />
        </SafeAreaView>
    );
}