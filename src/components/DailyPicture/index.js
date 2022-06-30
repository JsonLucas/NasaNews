import { getTodaysAstronomyPicture } from "../../services/requests";
import { Fragment, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Loading from "../Loading";
import style from "./style";

export default function DailyPicture({setShowInfo, setInfo}) {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        (async function getDailyPicture(){
            try{
                const { data } = await getTodaysAstronomyPicture();
                console.log(data);
                setData(data);
                setLoaded(true);
            }catch(e){
                console.log(e.message);
            }
        })();
    }, []);
    const moreInformation = () => {
        setShowInfo(true);
        setInfo(data.explanation);
        console.log('kk eae');
    }
    return (
        <View style={style.Container}>
            {!loaded && <Loading />}
            {loaded && <TouchableOpacity onPress={moreInformation} style={style.ContainerImage}>
                <View style={style.PictureTitle}>
                    <Text style={style.TitleText}>{data.title}</Text>
                </View>
                <Image source={data.hdurl} style={style.Picture}/>
            </TouchableOpacity>}
        </View>
    );
}