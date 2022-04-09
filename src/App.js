import './App.css';
import React from "react"
//import react router dom
import {Route, Switch} from "react-router-dom"
//importp pages
import Home from "./pages/Home"
import Member from './pages/member';
import Member_kasir from './pages/member.kasir';
import Member_owner from './pages/member.owner';
import User from './pages/user';
import User_owner from './pages/user.owner';
import Paket from './pages/paket';
import Paket_kasir from './pages/paket.kasir';
import Paket_owner from './pages/paket.owner';
import Outlet from './pages/outlet';
import Outlet_owner from './pages/outlet.owner';
import Transaksi from './pages/transaksi';
import Transaksi_kasir from './pages/transaksi.kasir';
import LaporanAdmin from './pages/laporanAdmin';
import LaporanKasir from './pages/laporanKasir';
import Login from './pages/Login';
import Register from './pages/Register';
import Home_kasir from './pages/Home_kasir';
import Home_owner from './pages/Home_owner';
import Transaksi_owner from './pages/transaksi.owner';
import LaporanOwner from './pages/laporanOwner';
import FormTransaksi from './pages/FormTransaksi';
import FormTransaksiKasir from './pages/FormTransaksiKasir';
class App extends React.Component{
  render(){
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home_kasir" component={Home_kasir}/>
        <Route exact path="/home_owner" component={Home_owner}/>
        <Route exact path="/member" component={Member} />
        <Route exact path="/member.kasir" component={Member_kasir} />
        <Route exact path="/member.owner" component={Member_owner} />
        <Route exact path="/user" component={User} />
        <Route exact path="/user.owner" component={User_owner} />
        <Route exact path="/paket" component={Paket} />
        <Route exact path="/paket.owner" component={Paket_owner} />
        <Route exact path="/paket.kasir" component={Paket_kasir} />
        <Route exact path="/outlet" component={Outlet} />
        <Route exact path="/outlet.owner" component={Outlet_owner} />
        <Route exact path="/transaksi" component={Transaksi} />
        <Route exact path="/transaksi.kasir" component={Transaksi_kasir} />
        <Route exact path="/laporanAdmin" component={LaporanAdmin} />
        <Route exact path="/laporanKasir" component={LaporanKasir} />
        <Route exact path="/laporanOwner" component={LaporanOwner} />
        <Route exact path="/transaksi.owner" component={Transaksi_owner} />
        <Route exact path="/FormTransaksi" component={FormTransaksi} />
        <Route exact path="/FormTransaksiKasir" component={FormTransaksiKasir} />
        <Route exact path="/register" component={Register} />
      </Switch>  
    );
  }
}

export default App;