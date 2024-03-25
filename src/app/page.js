'use client'
import styles from "./page.module.css";
import LogForm from "@/LoginForm";
import { useSelector } from "react-redux";
import Home from "@/Home";

export default function App() {
  const state = useSelector((state)=>state)
  console.log(state.appReducer.isLoggedIn, "login")
  return (
    <div className={styles.bg} >
      {state?.appReducer?.isLoggedIn?<Home/>:<LogForm/> }
      
      
    </div>
  );
}
