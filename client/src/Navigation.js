import React from "react";
import { Link } from "react-router-dom";
import './css/Navigation.css';

class Navigation extends React.Component {
    componentDidMount(){
        this.textEffect();
    }

    textEffect(){
        let possibleCharacters = ['유','니','텍','오','토']
        let parentElement = document.getElementById('name').children
        for(let i=0; i< parentElement.length;i++){
            let maxTime = (i*800) + 1000
            let currentTime = 0
            while(currentTime < maxTime){
                let randomNumber = Math.floor(Math.random() * 5);
                setTimeout(()=>{
                    parentElement[i].innerHTML = possibleCharacters[randomNumber];
                }, currentTime)
                currentTime += 50
            }
            setTimeout(()=>{
                parentElement[i].innerHTML = possibleCharacters[i]
            }, maxTime + 100)
        }

        setInterval(()=>{
            let randomNumber = Math.floor(Math.random() * 5);
            for(let i=0; i<=10; i++){
                let randomNumber2 = Math.floor(Math.random() * 5);
                setTimeout(()=>{
                    parentElement[randomNumber].innerHTML = possibleCharacters[randomNumber2]
                },i*50)
            }
            setTimeout(()=>{
                parentElement[randomNumber].innerHTML = possibleCharacters[randomNumber]
            },550)
        },10000)
    }

    render() {
        return (
            <div id='navigation'>
                <Link id='name' className="links" to="/"><span>유</span><span>니</span><span>텍</span><span>오</span><span>토</span></Link>
                <div id='nav-links'>
                    <Link className="links" to="/About">회사소개</Link>
                    <Link className="links" to="/About">문의</Link>
                    <Link className="links" to="/About">오시는 길</Link>
                </div>
            </div>
        )
    }
}

export default Navigation;