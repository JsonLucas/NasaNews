import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    Container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoadingBox: {
        height: '150px',
        width: '150px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoadingIcon: {
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'black'
    }
});

export default style;