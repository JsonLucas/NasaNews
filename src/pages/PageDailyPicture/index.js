import { Fragment, useState } from "react";
import { SafeAreaView } from "react-native";
import DailyImageInfo from "../../components/DailyImageInfo";
import DailyPicture from "../../components/DailyPicture";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function PageDailyPicture() {
    const [showInfo, setShowInfo] = useState(false);
    const [info, setInfo] = useState('');
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff', overflowY: 'scroll'}}>
            <DailyPicture setShowInfo={setShowInfo} setInfo={setInfo} />
            <DailyImageInfo showInfo={showInfo} info={info} />
        </SafeAreaView>
    );
}