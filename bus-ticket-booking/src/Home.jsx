import Navbar from "./Nav-bar";
import Searchbar from "./Search-bar";
import FAQ from "./FAQ";
import { useLocation} from "react-router-dom";
import { useState,useEffect } from "react";

export default function Home(){
    const [loggedin,setloggedin]=useState(false);
    const location=useLocation();
    const data=location.state;
    useEffect(()=>{
        if(data!=null){
            setloggedin(true);
        }else{
            setloggedin(false);
        }
    },[data]);
    function Nav_bar(){
        if(data==null){
            return (<Navbar loggedin={loggedin} userinfo={null}/>);
        }
        return (<Navbar loggedin={loggedin} userinfo={data}/>);
    }
    return(
        <>  
            
            <Nav_bar/>
            <Searchbar userinfo={data} loggedin={loggedin}/>
            <FAQ/>
        </>
    );   
}