import React, { useState } from "react";
import '../css/Contact.css';



const Contact = (props) => {
    let [emailStatus, setEmailStatus] = useState("");

    function inputClicked(input) {
        document.getElementsByClassName('contactLabel')[input].style.top = '-28px';
        document.getElementsByClassName('contactLabel')[input].style.fontSize = '15px';
        document.getElementsByClassName('contactLabel')[input].style.color = 'gray';
        document.getElementsByClassName('contactBar2')[input].style.left = '0';
        document.getElementsByClassName('inputContainer')[input].children[0].focus();
    }
    function inputOut(input) {
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

    async function validateForm() {
        let name = document.getElementsByClassName('inputContainer')[0].children[0].value
        let email = document.getElementsByClassName('inputContainer')[1].children[0].value
        let message = document.getElementsByClassName('inputContainer')[2].children[0].value
        if (name.length < 1) {
            document.getElementsByClassName('inputContainer')[0].children[0].focus();
            document.getElementsByClassName('contactLabel')[0].innerHTML = '이름을 입력해주세요.';
        } else if (email.length < 1) {
            document.getElementsByClassName('inputContainer')[1].children[0].focus();
            document.getElementsByClassName('contactLabel')[1].innerHTML = '이메일을 입력해주세요.';
        } else if (validateEmail(email) == false) {
            document.getElementsByClassName('inputContainer')[1].children[0].focus();
            document.getElementsByClassName('contactLabel')[1].innerHTML = '사용 가능한 이메일을 입력해주세요.';
        } else if (message.length < 1) {
            document.getElementsByClassName('inputContainer')[2].children[0].focus();
            document.getElementsByClassName('contactLabel')[2].innerHTML = '메세지를 입력해주세요.';
        } else {
            document.getElementsByClassName('contactLabel')[0].innerHTML = '이름';
            document.getElementsByClassName('contactLabel')[1].innerHTML = '이메일';
            document.getElementsByClassName('contactLabel')[2].innerHTML = '메세지';
            try {
                let fetchData = await fetch("http://localhost:3001/email/send", {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name, email, message})
                })
                    .then(res => res.json())
                    .then(res => { return res.status })
                console.log(fetchData)
                if (fetchData == 1) {
                    succeedSendingEmail()
                } else {
                    setEmailStatus("이메일 전송 실패하였습니다.")
                }
            } catch (err) {
                console.log(err)
            }


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

    function succeedSendingEmail() {
        console.log('test')
        console.log(document.getElementsByClassName('inputContainer')[0].children[0])
        document.getElementsByClassName('inputContainer')[0].children[0].value = ""
        document.getElementsByClassName('inputContainer')[1].children[0].value = ""
        document.getElementsByClassName('inputContainer')[2].children[0].value = ""
        inputOut(0);
        inputOut(1);
        inputOut(2);
        setEmailStatus("이메일을 보내주셔서 감사합니다. 빠른 시일 내에 연락드리겠습니다.")
    }


    return (
        <div id='contactSection'>
            <div id='contactContainer'>
                <form id='contactForm'>
                    <div className='inputContainer'>
                        <input type="text" name="name" required onFocus={() => inputClicked(0)} onBlur={() => inputOut(0)} />
                        <label className="contactLabel" onClick={() => inputClicked(0)}>이름</label>
                        <div className='contactBar'><div className='contactBar2'></div></div>
                    </div>
                    <div className='inputContainer'>
                        <input type="text" name="email" required onFocus={() => inputClicked(1)} onBlur={() => inputOut(1)} />
                        <label className="contactLabel" onClick={() => inputClicked(1)}>이메일</label>
                        <div className='contactBar'><div className='contactBar2'></div></div>
                    </div>
                    <div className='inputContainer'>
                        <textarea name="message" type="text" rows="10" onFocus={() => inputClicked(2)} onBlur={() => inputOut(2)}></textarea>
                        <label className="contactLabel" onClick={() => inputClicked(2)}>메세지</label>
                        <div className='contactBar'><div className='contactBar2'></div></div>
                    </div>
                    <div id="contactFormAfterSubmit">{emailStatus}</div>
                    <div id='contactFormSendContainer'><input id="contactFormSend" type="button" value="전송" onClick={() => validateForm()} /></div>
                </form>
            </div>
        </div>
    )
}

export default Contact;