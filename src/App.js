import './App.css';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Box from "./Box";
import {Suspense} from "react";
import {Model} from "./model/auto/Ferrari";
import {Starship} from "./model/starship/Starship";
import {Model2} from "./model/starship/Model2";

function App() {
    return (
        <Canvas camera={{position: [0, 0, 5]}}>
            <OrbitControls/>
            <color attach="background" args={["lightblue"]}/>
            <hemisphereLight intensity={0.35}/>
            <spotLight
                position={[15, 10, 10]}
                angle={0.3}
                penumbra={1}
                intensity={2}
                castShadow/>
            {/*<Box position={[-4, 0, 0]} number="1"/>*/}
            {/*<Box position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]} number="2"/>*/}
            {/*<Box position={[4, 0, 0]} number="3"/>*/}
            <Suspense fallback={null}>
                <Model2 />
            </Suspense>
            {/*<Suspense fallback={null}>*/}
            {/*    <Starship />*/}
            {/*</Suspense>*/}

        </Canvas>
    )

}

export default App;
