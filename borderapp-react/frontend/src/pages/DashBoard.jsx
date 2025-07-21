import Table from "../components/Table/Table";
import Tabs from "../components/Taps";
import SearchOperation from "../components/SearchOperation"
import Header from "../components/Header"
import "../assets/Dash.css"
export default function DashBoard(){

    return(
        <>
       <div className="dashboard">
         
        <Header/>
        <SearchOperation/>
        <Tabs/>
        <Table/>
        
       </div>
        </>
    )
}