import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const imgMap = ["/images/rockL.webp", "/images/scissorsL.png", "/images/paper.png"]

export default function Results({selectedItem}){
    const Nav = useNavigate()

    const [img1, setImg1] = useState("/images/questionMark.jpeg")

    const [img2, setImg2] = useState("/images/questionMark.jpeg")

    useEffect(() => {
        const x = setInterval(() => {
            const res = window.confirm("continue");
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