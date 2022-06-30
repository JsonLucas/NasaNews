import style from "./style";
import { Fragment } from "react";
import { Text, View } from "react-native";

export default function DailyImageInfo({showInfo, info}) {
    return (
        <Fragment>
            {showInfo && 
                <View style={style.Container}>
                    <Text style={style.InfoText}>
                        {info}
                    </Text>
                </View>
            }
        </Fragment>
    );
}