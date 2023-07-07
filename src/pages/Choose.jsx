import AppLayout from "../Layout/AppLayout";
import { useNavigate } from "react-router-dom";

export default function Choose({ setSelectedItem, selectedItem}) {

    const Nav = useNavigate()

    return(
        <AppLayout>
            <h1>Player vs Computer</h1>
            <div>
                <img src="/images/rockR.webp" alt="" onClick={() => setSelectedItem(0)}/>
                <img src="/images/scissorsR.png" alt="" onClick={() => setSelectedItem(1)}/>
                <img src="/images/paper.png" alt="" onClick={() =>setSelectedItem(2)}/>
            </div>
            <button onClick={() => Nav("/results")}>Shoot {selectedItem}</button>
        </AppLayout>
    )
}