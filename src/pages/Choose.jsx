import AppLayout from "../Layout/AppLayout";
import { useNavigate } from "react-router-dom";

const imgStyle = "bg-white bg-opacity-30 py-2 px-4 rounded-3xl w-[40%] m-4 h-auto"

export default function Choose({ setSelectedItem, selectedItem}) {

    const Nav = useNavigate()

    return(
        <AppLayout>
            <h1>Player vs Computer</h1>
            <div className="flex items-start justify-around flex-wrap">
                <img src="/images/rockR.webp" alt="" onClick={() => setSelectedItem(0)} className={imgStyle}  />
                <img src="/images/paper.png" alt="" onClick={() =>setSelectedItem(2)} className={imgStyle} />
                <img src="/images/scissorsR.png" alt="" onClick={() => setSelectedItem(1)} className={imgStyle} />
            </div>
            <button onClick={() => Nav("/results")}>Shoot {selectedItem}</button>
        </AppLayout>
    )
}