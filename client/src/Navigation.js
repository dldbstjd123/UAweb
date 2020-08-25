import React from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
import './css/Navigation.css';

class Navigation extends React.Component {
    constructor(){
        super();
        this.state={
            currentPage: 'home'
        }
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.textEffectAtStart();
        this.textEffectAfter();
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
        this.textEffectAtStart();
    }

    textEffectAtStart(){
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
    }

    textEffectAfter(){
        let possibleCharacters = ['유','니','텍','오','토']
        let parentElement = document.getElementById('name').children
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
                <Link id='name' className="links" to="/" onClick={()=>{this.setState({currentPage:'home'})}}><span>유</span><span>니</span><span>텍</span><span>오</span><span>토</span></Link>
                <div id='nav-links'>
                    <Link className="links" to="/about" onClick={()=>{this.setState({currentPage:'about'})}}>회사소개</Link>
                    <Link className="links" to="/contact" onClick={()=>{this.setState({currentPage:'contact'})}}>문의</Link>
                    <Link className="links" to="/location" onClick={()=>{this.setState({currentPage:'location'})}}>오시는 길</Link>
                </div>
            </div>
        )
    }
}

export default Navigation;