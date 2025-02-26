import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Leva } from 'leva'



const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
  <Leva oneLineLabels />
  <Canvas
    camera={{
      fov: 50,
      near: 0.01,
      far: 200,
      position: [0, 0, 10],
    }}
  >
    <Experience />

  
  </Canvas>
  </>
);
