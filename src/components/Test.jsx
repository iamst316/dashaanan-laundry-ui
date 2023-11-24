import { useEffect } from "react"
import gsap from "gsap";
import { useRef } from "react";

export default function(){
  const boxRef = useRef();
  const revRef = useRef();
  useEffect(()=>{
    gsap.to(boxRef.current, {
      rotation: "+=360",
      x:200,
      y:200
    });

    gsap.to(revRef.current, {
      rotation: "-=360",
      x:-200,
      y:200
    });
  },)
  return (
    <>
      <div style={{
        backgroundColor:"pink",
        borderRadius:10,
        margin:"auto",
        width:150,
        textAlign:"center",
        marginTop:45
      }} className="box" ref={boxRef}>Hello</div>

      <div style={{
        backgroundColor:"pink",
        borderRadius:10,
        margin:"auto",
        width:150,
        textAlign:"center",
        marginTop:75
      }} className="box" ref={revRef}>Bye</div>
    </>
  )
}