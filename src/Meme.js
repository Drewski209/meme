import React from "react";
import "./memesData";
import memesData from "./memesData";

export default function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
    }

    return (
        <main>
            <form className="form">
                <input 
                    type = "text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input 
                    type = "text"
                    placeholder="Bottom Text"
                    className="form--input"    
                />
                <button 
                className="form--button"
                onClick={getMemeImage}
                >
                    GET A NEW MEME IMAGE 🖼
                </button>
            </form>
        </main>
    ) 
}