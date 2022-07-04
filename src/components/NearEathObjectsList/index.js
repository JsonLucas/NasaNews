import { Text, View } from "react-native";
import { getNearEarthObject } from "../../services/requests";
import { useState, useEffect } from "react";
import style from "./style";
import Loading from "../Loading";
import CollapsibleList from "react-native-collapsible-list";

export default function NearEarthObjectsList() {
    const [loadedObjects, setLoadedObjects] = useState(false);
    const [objects, setObjects] = useState([]);
    useEffect(() => {
        (async function getObjects() {
            try {
                const { data } = await getNearEarthObject();
                const { near_earth_objects } = data;
                const dates = Object.keys(near_earth_objects).map((item) => item);
                let objects = [];
                for (let i in near_earth_objects) {
                    objects.push(near_earth_objects[i]);
                }
                const formatedData = dates.map((item, index) => { return { date: item, object: objects[index] } });
                setObjects(formatedData);
                setLoadedObjects(true);
            } catch (e) {
                console.log(e.message);
            }
        })();
    }, []);
    return (
        <View style={style.Container}>
            {!loadedObjects && <Loading />}
            {loadedObjects && <View style={style.Container}>
                {objects.map((item, index, array) => (
                    <CollapsibleList
                        key={index}
                        numberOfVisibleItems={0}
                        wrapperStyle={style.WrapperStyle}
                        buttonPosition='top'
                        buttonContent={
                            <View style={style.ButtonActive}>
                                <Text style={style.TextButton}>{item.date}</Text>
                            </View>
                        }
                    >
                        <View style={style.ViewListItem}>
                            {item.object.map((obj, objIndex) => (
                                <CollapsibleList
                                    key={objIndex}
                                    numberOfVisibleItems={0}
                                    wrapperStyle={style.WrapperStyle}
                                    buttonPosition='top'
                                    buttonContent={<View style={{backgroundColor: '#ddd'}}>
                                        <Text style={style.TextListItem}>Name: {obj.name}</Text></View>
                                    }
                                >
                                    <Text style={style.SublistTextListItem}>Magnitude:
                                        {obj.absolute_magnitude_h}</Text>
                                    {obj.is_potentially_hazardous_asteroid &&
                                        <Text style={style.SublistTextListItem}>Dangerous: Yes</Text>}
                                    {!obj.is_potentially_hazardous_asteroid &&
                                        <Text style={style.SublistTextListItem}>Dangerous: No</Text>}
                                    <Text style={style.SublistTextListItem}>Estimated diameter:
                                        {obj.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</Text>
                                </CollapsibleList>
                            ))}
                        </View>
                    </CollapsibleList>
                ))}
            </View>}
        </View>
    );
}