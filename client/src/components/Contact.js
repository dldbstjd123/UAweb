import React, { useState, useEffect } from "react";
import '../css/Contact.css';



const Contact = (props) => {

    function inputClicked(input) {
        console.log(input)
        console.log(document.getElementsByClassName('contactLabel'))
        document.getElementsByClassName('contactLabel')[input].style.top = '-28px';
        document.getElementsByClassName('contactLabel')[input].style.fontSize = '15px';
        document.getElementsByClassName('contactLabel')[input].style.color = 'gray';
        document.getElementsByClassName('contactBar2')[input].style.left = '0';
        document.getElementsByClassName('inputContainer')[input].children[0].focus();
    }
    function inputOut(input) {
        console.log("input OUT ")
        if (input == 0 && document.getElementsByClassName('inputContainer')[input].children[0].value == "") {
            document.getElementsByClassName('contactLabel')[input].style.top = '10px';
            document.getElementsByClassName('contactLabel')[input].style.fontSize = '25px';
            document.getElementsByClassName('contactLabel')[input].style.color = 'white';
        }
        if (input == 1 && document.getElementsByClassName('inputContainer')[input].children[0].value == "") {
            document.getElementsByClassName('contactLabel')[input].style.top = '10px';
            document.getElementsByClassName('contactLabel')[input].style.fontSize = '25px';
            document.getElementsByClassName('contactLabel')[input].style.color = 'white';
        }
        if (input == 2 && document.getElementsByClassName('inputContainer')[input].children[0].value == "") {
            document.getElementsByClassName('contactLabel')[input].style.top = '10px';
            document.getElementsByClassName('contactLabel')[input].style.fontSize = '25px';
            document.getElementsByClassName('contactLabel')[input].style.color = 'white';
        }
        document.getElementsByClassName('contactBar2')[input].style.left = '-100%';
    }
    
    function validateForm() {
        let name = document.getElementsByClassName('inputContainer')[0].children[0].value
        let email = document.getElementsByClassName('inputContainer')[1].children[0].value
        let message = document.getElementsByClassName('inputContainer')[2].children[0].value
        if (name.length < 1) {
            document.getElementsByClassName('inputContainer')[0].children[0].focus();
            document.getElementsByClassName('contactLabel')[0].innerHTML = 'Please Insert Name';
        } else if (email.length < 1) {
            document.getElementsByClassName('inputContainer')[1].children[0].focus();
            document.getElementsByClassName('contactLabel')[1].innerHTML = 'Please Insert Email';
        } else if (validateEmail(email) == false) {
            document.getElementsByClassName('inputContainer')[1].children[0].focus();
            document.getElementsByClassName('contactLabel')[1].innerHTML = 'Please Insert Valid Email Address';
        } else if (message.length < 1) {
            document.getElementsByClassName('inputContainer')[2].children[0].focus();
            document.getElementsByClassName('contactLabel')[2].innerHTML = 'Please Insert Message';
        } else {
            document.getElementsByClassName('contactLabel')[0].innerHTML = 'Name';
            document.getElementsByClassName('contactLabel')[1].innerHTML = 'Email';
            document.getElementsByClassName('contactLabel')[2].innerHTML = 'Message';
            // $.ajax({
            //     type: "POST",
            //     url: window.location.origin + "/email",
            //     headers: { 'Access-Control-Allow-Origin': '*'},
            //     //url: "http://localhost:1121/email",
            //     data: {name, email, message},
            //     success: function(data){
            //         if(data.status == 'succeed'){
            //             document.getElementById('contactFormAfterSubmit').innerHTML = "Thank you!, Your message has been received.";
            //             document.getElementsByClassName('inputContainer')[0].children[0].value = "";
            //             document.getElementsByClassName('inputContainer')[1].children[0].value = "";
            //             document.getElementsByClassName('inputContainer')[2].children[0].value = "";
            //         }else if(data.status == 'failed'){
            //             document.getElementById('contactFormAfterSubmit').innerHTML = "Sorry, please try it again later.";
            //         }
            //     },
            //     dataType:'json'
            //   });
        }
    
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    

    return (
        <div id='contactSection'>
            <div id='contactContainer'>
                <form id='contactForm'>
                    <div class='inputContainer'>
                        <input type="text" name="name" required onFocus={()=>inputClicked(0)} onBlur={()=>inputOut(0)} />
                        <label class="contactLabel" onclick="inputClicked(0)">이름</label>
                        <div class='contactBar'><div class='contactBar2'></div></div>
                    </div>
                    <div class='inputContainer'>
                        <input type="text" name="email" required onFocus={()=>inputClicked(1)} onBlur={()=>inputOut(1)} />
                        <label class="contactLabel" onclick="inputClicked(1)">이메일</label>
                        <div class='contactBar'><div class='contactBar2'></div></div>
                    </div>
                    <div class='inputContainer'>
                        <textarea name="message" type="text" rows="10" onFocus={()=>inputClicked(2)} onBlur={()=>inputOut(2)}></textarea>
                        <label class="contactLabel" onclick="inputClicked(2)">메세지</label>
                        <div class='contactBar'><div class='contactBar2'></div></div>
                    </div>
                    <div id="contactFormAfterSubmit"></div>
                    <div id='contactFormSendContainer'><input id="contactFormSend" type="button" value="전송" onclick={()=>validateForm()} /></div>
                </form>
            </div>
        </div>
    )
}

export default Contact;