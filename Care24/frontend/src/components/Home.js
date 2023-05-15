import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function handleSignOut() {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("EMAIL");
  localStorage.removeItem("USERTYPE");
  localStorage.removeItem("NAME");
  localStorage.removeItem("USERID");

  window.location.href = '/signup';
}
function handleMDM() {
  if (localStorage.getItem("USERTYPE")==="Patient") {
    window.location.href = '/medicinerequests/dashboard';
  } else if (localStorage.getItem("USERTYPE")==="Pharmacist") {
    window.location.href = '/medicinedelivery/pharmacist';
  } else if(localStorage.getItem("USERTYPE")==="Delivery Person") {
    window.location.href = '/medicinedelivery/deliveryPerson/';
  }
  else{
    alert("Please sign in to continue...")
  }
}

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentusertype : localStorage.getItem('USERTYPE')
    };
}
  
  componentDidMount() {
    const token = localStorage.getItem('TOKEN');
    const usertype = localStorage.getItem('USERTYPE');
    if (!token) {
      //this.props.history.push('/signin');
    }
  }


  render() {
    return (
      <div>Home
<div className='dashboard'>
                <div className='dashboard-app'>
                    <div className='dashboard-content'> <p>usertype : {localStorage.getItem("USERTYPE")}</p>
                    <p>user : {localStorage.getItem("EMAIL")}</p>
                    <p>id : {localStorage.getItem("USERID")}</p>
                    <p>name : {localStorage.getItem("NAME")}</p>
                    
                    <button onClick={handleSignOut}>Sign Out</button>
                    <button onClick={handleMDM}>Medicine Delivery Portal</button></div></div></div>
       
      </div>

      

    )
  }
}
