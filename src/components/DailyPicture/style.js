import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    Container: {
        width: '95%',
        height: '300px',
        marginTop: '10px', 
        marginHorizontal: 'auto'
    },
    ContainerImage: {
        width: '100%',
        flex: 1
    },
    Picture: {
        width: '100%',
        height: '100%'
    },
    PictureTitle: {
        width: '100%',
        height: '50px',
        position: 'absolute',
        bottom: '0px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    TitleText: {
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'white'
    }
});

export default style;