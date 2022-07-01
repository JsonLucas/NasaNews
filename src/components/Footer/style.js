import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    Container: {
        width: '100%',
        height: '50px',
        backgroundColor: 'black',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'fixed',
        bottom: '0'
    },
    BoxIcon: {
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkred'
    },
    Icon: {
        color: 'white',
        fontSize: '20px'
    }
});

export default style;