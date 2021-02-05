import preloader from "../../../assets/images/J7eF9.gif";
import React from "react";
import s from "./Preloader.module.css"

export const Preloader = () => {
    return <div><img className={s.preload} src={preloader}/></div>
}