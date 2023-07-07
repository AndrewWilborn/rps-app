import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const imgMap = ["/images/rockL.webp", "/images/scissorsL.png", "/images/paper.png"]

function getWinMessage(selectedItem, cpuItem){
    if(selectedItem === cpuItem){
        return "Its a Tie!"
    }
    if(selectedItem === 0){
        if(cpuItem === 2){
            return "Paper beats Rock, you lose."
        }
        else{
            return "Rock beats Scissors, you win!"
        }
    }
    if(selectedItem === 1){
        if(cpuItem === 0){
            return "Rock beats Scissors, you lose."
        }
        else{
            return "Scissors beats Paper, you win!"
        }
    }
    if(selectedItem === 2){
        if(cpuItem === 1){
            return "Scissors beats Paper, you lose."
        }
        else{
            return "Paper beats Rock, you win!"
        }
    }
}

export default function Results({selectedItem}){
    const Nav = useNavigate()

    const [img1, setImg1] = useState("/images/questionMark.jpeg")

    const [img2, setImg2] = useState("/images/questionMark.jpeg")

    useEffect(() => {
        const x = setInterval(() => {
            const res = window.confirm(getWinMessage(selectedItem, cpuChoice));
            if(res){
                Nav("/")
            }
        }, 2000);
        return () => {
            clearInterval(x);
        }
    }, []);

    useEffect(() => {
        const x = setInterval(() => {
            setImg1(imgMap[selectedItem])
            setImg2(imgMap[cpuChoice])
        }, 1000);
        return () => {
            clearInterval(x);
        }
    }, []);

    const cpuChoice = Math.floor(Math.random()*3)

    return(
        <main>
            <div>
                <h2>Player</h2>
                <img src={img1} alt="" />
            </div>
            <div>
                <h2>VS</h2>
            </div>
            <div>
                <h2>CPU {cpuChoice}</h2>
                <img src={img2} alt="" />
            </div>
        </main>
    )
}