import { getTodaysAstronomyPicture } from "../../services/requests";
import { Fragment, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Loading from "../Loading";
import style from "./style";
import { LinearGradient } from "expo-linear-gradient";

export default function DailyPicture({setShowInfo, setInfo}) {
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(0);
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
        if(counter%2 === 0){
            setShowInfo(true);
            setInfo(data.explanation);
        }else{
            setShowInfo(false);
            setInfo('');
        }
        setCounter(counter + 1);
    }
    return (
        <View style={style.Container}>
            {!loaded && <Loading />}
            {loaded && <TouchableOpacity onPress={moreInformation} style={style.ContainerImage}>
                <LinearGradient style={style.PictureTitle} colors={['transparent', 'black']} locations={[0.1, 0.8]}>
                    <Text style={style.TitleText}>{data.title}</Text>
                </LinearGradient>
                <Image source={data.hdurl} style={style.Picture}/>
            </TouchableOpacity>}
        </View>
    );
}