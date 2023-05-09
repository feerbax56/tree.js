import React, {useRef, useState} from 'react';
import {useFrame} from "@react-three/fiber";

const Box = (props) => {
    const ref = useRef()
    const [color, setColor] = useState("orange")


    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    return (
        <mesh
            {...props}
            ref={ref}
            onClick={(event) => setColor("blue")}
            onPointerOver={(event) => setColor("red")}
            onPointerOut={(event) => setColor("green")}
            onPointerMissed={() => console.log(`missed ${props.number}`)}
            onUpdate={(self) => console.log(`props update`)}
        >
            <boxGeometry args={[2, 2, 2]}/>
            <meshBasicMaterial color={color}/>
        </mesh>
    );
};

export default Box;