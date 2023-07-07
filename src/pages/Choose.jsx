import AppLayout from "../Layout/AppLayout";


export default function Choose({ setSelectedItem, selectedItem}) {

    return(
        <AppLayout>
            <h1>Player vs Computer</h1>
            <div>
                <img src="/images/rockR.webp" alt="" onClick={() => setSelectedItem(0)}/>
                <img src="/images/scissorsR.png" alt="" onClick={() => setSelectedItem(1)}/>
                <img src="/images/paper.png" alt="" onClick={() =>setSelectedItem(2)}/>
            </div>
            <button></button>
        </AppLayout>
    )
}