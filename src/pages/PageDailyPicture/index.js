import { Fragment, useState } from "react";
import DailyImageInfo from "../../components/DailyImageInfo";
import DailyPicture from "../../components/DailyPicture";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function PageDailyPicture() {
    const [showInfo, setShowInfo] = useState(false);
    const [info, setInfo] = useState('');
    return (
        <Fragment>
            <Header />
            <DailyPicture setShowInfo={setShowInfo} setInfo={setInfo} />
            <DailyImageInfo showInfo={showInfo} info={info} />
            <Footer />
        </Fragment>
    );
}