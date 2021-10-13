
import { useState } from "react";
import React from 'react';
import './App.css';

function App() {
    const [oldId, newId] = useState([{
        id: "",
        email: "",
        first_name: "",
        last_name: "",
        avatar: ""
    }]);

    function GetUsers() {
        fetch("https://reqres.in/api/users?page=1").then((resp) => {

            resp.json().then((result) => {

                newId(result.data);

            })

        }).catch((error) => { console.log(error) });
        document.getElementsByClassName('getbtn')[0].style.background = "yellow";
        document.getElementsByClassName('getbtn')[1].style.background = "pink";
        document.getElementById('loader').style.display = "unset";
        document.getElementById('con').style.display = "none";
        document.getElementsByTagName('body')[0].style.boxShadow = "0rem 0rem 30rem 22rem rgba(46, 45, 45, 0.787)";
    }

    function timing() {
        setTimeout(show, 4000);
        function show() {
            document.getElementById('user-body').style.display = "unset";
            document.getElementById('loader').style.display = "none";
            console.log("Hellow");
        }
    }
function close(){
    document.getElementById('user-body').style.display = "none";
    document.getElementById('con').style.display="unset";
    document.getElementsByTagName('body')[0].style.boxShadow = "none";
    document.getElementsByClassName('getbtn')[0].style.background = "pink";
    document.getElementsByClassName('getbtn')[1].style.background = "yellow";
}
function CreateCard(oldId) {

      return (
            <>
           
                <div id="user-item" >
                    <img className='user-image' src={oldId.avatar} />
                    <h4 className="user-name text-center">{oldId.first_name} {oldId.last_name}</h4>
                    <p className="text-center text-muted">There are many variations of passages of Lorem Ipsum available, by injected humour.</p>
                    <p className="text-center"><b>{oldId.email}</b></p>
                </div>

            </>
        );
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" id="navi">
                <a className="navbar-brand text-white ms-4"><h2><i>LetsGrowMore</i></h2></a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="myNavbar">
                    <form className="justify-content-center">
                        <span className="text-center">
                            <button className="getbtn" onClick={GetUsers} onMouseUp={timing} type="button" >Get User</button>
                        </span>
                        <span className="text-center">
                            <button className="getbtn" style={{backgroundColor:"yellow"}} onMouseUp={close} type="button" >Close</button>
                        </span>
                    </form>
                </div>

            </nav>
            <div id="loader"></div>
            
            <div id="user-body">
                {oldId.map((c) => <CreateCard key={c.id} email={c.email} first_name={c.first_name} last_name={c.last_name} avatar={c.avatar} />)}
            </div>
           
        </>
    );
}

export default App;
