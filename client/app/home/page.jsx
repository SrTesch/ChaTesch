import React from "react";
import dynamic from "next/dynamic";
export default function Home(){

    const Teste = dynamic(()=> import("../../components/home"))
    
    return(
        <>
        <Teste />
        </>
    )
}