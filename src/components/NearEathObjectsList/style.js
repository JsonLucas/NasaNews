import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        width: '95%',
        marginHorizontal: 'auto'
    },
    WrapperStyle: {
        backgroundColor: 'white'
    },
    ButtonActive: {
        paddingVertical: '5px',
        backgroundColor: 'white' //trocar as cores
    },
    ButtonInactive: {
        paddingVertical: '5px',
        backgroundColor: 'yellow'
    },
    TextButton: {
        fontSize: '20px'
    },
    DateText: {
        fontSize: '20px',
        color: 'black'
    },
    ViewListItem: {
        maxHeight: '195px',
        overflowY: 'scroll',
        paddingVertical: '5px'
    },
    TextListItem: {
        fontSize: '20px',
        color: 'black',
        paddingVertical: '5px',
        paddingLeft: '10px'
    },
    SublistTextListItem: {
        fontSize: '15px',
        color: 'black',
        paddingVertical: '5px',
        paddingLeft: '20px',
        backgroundColor: '#eee'
    }
});

export default style;