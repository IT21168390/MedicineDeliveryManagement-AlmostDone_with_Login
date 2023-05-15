import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import ViewMedicineDeliveryRequests from './components/MedicineDeliveryManagement/Patients/ViewMedicineDeliveryRequests';

import ViewSingleMedicineDeliveryRequest from './components/MedicineDeliveryManagement/Patients/ViewSingleMedicineDeliveryRequest';
import CreateMedicineDeliveryRequest from './components/MedicineDeliveryManagement/Patients/CreateMedicineDeliveryRequest';

import ViewNewMedicineDeliveryRequests from './components/MedicineDeliveryManagement/Pharmacist/ViewNewMedicineDeliveryRequests'
import AddBillToMedicineDeliveryRequests from './components/MedicineDeliveryManagement/Pharmacist/AddBillToMedicineDeliveryRequests'
import DeliveryAssignment from './components/MedicineDeliveryManagement/Pharmacist/AssignDeliveryForMDM'
import PharmacistOrderStatusUpdater from './components/MedicineDeliveryManagement/Pharmacist/UpdateOrderStatus'

import DeliveryDashboard from './components/MedicineDeliveryManagement/Deliverer/DeliveryOfMedicineRequests'


import MDMSideNavBar from './components/MedicineDeliveryManagement/MDMSideNavBar';
import NavBarPharmacist from './components/MedicineDeliveryManagement/MDMPharmacistHeader';
import NavBarDeliverer from './components/MedicineDeliveryManagement/MDMDeliveryHeader';
import NavBarPatients from './components/MedicineDeliveryManagement/MDMPatientsHeader';

import Header from './components/Header';


export default class App extends Component {

  render() {

    return (

      <BrowserRouter>

        <NavBar />
        <SideBarNav />

        <div className="">
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/signin' Component={SignIn}></Route>
            <Route path='/signup' Component={SignUp}></Route>

            <Route path='/medicinerequests/dashboard' exact Component={CreateMedicineDeliveryRequest}></Route>
            <Route path='/medicinerequests/view' Component={ViewMedicineDeliveryRequests}></Route>
            <Route path='/medicinerequests/viewS/:id' Component={ViewSingleMedicineDeliveryRequest}></Route>


            <Route path='/medicinedelivery/pharmacist' Component={ViewNewMedicineDeliveryRequests}></Route>
            <Route path='/medicinedelivery/pharmacist/billing' Component={AddBillToMedicineDeliveryRequests}></Route>
            <Route path='/medicinedelivery/pharmacist/deliveryassignment' Component={DeliveryAssignment}></Route>
            <Route path='/medicinedelivery/pharmacist/orderSatuses' Component={PharmacistOrderStatusUpdater}></Route>

            <Route path='/medicinedelivery/deliveryPerson/' Component={DeliveryDashboard}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}



function NavBar() {
  const location = useLocation();

  if (location.pathname.startsWith('/medicinedelivery/pharmacist')) {
    return <NavBarPharmacist />;
  } else if (location.pathname.startsWith('/medicinerequests/dashboard')) {
    return <NavBarPatients />;
  } else if (location.pathname.startsWith('/medicinerequests/view')) {
    return <NavBarPatients />;
  } else if (location.pathname.startsWith('/medicinerequests/viewS/:id')) {
    return <NavBarPatients />;
  } else if (location.pathname.startsWith('/medicinedelivery/deliveryPerson')) {
    return <NavBarDeliverer />;
  } else {
    return <Header />;
  }
}

function SideBarNav() {
  const location = useLocation();

  if (location.pathname === ('/')) {
    return;
  } else if (location.pathname.startsWith('/signin')||location.pathname.startsWith('/signup')) {
    return <NavBarDeliverer />;
  }else {
    return <MDMSideNavBar />;
  }
}