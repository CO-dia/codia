import { RoundedBox, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react';
import { Mesh } from 'three';

const Card = () => {
    const [hovered, setHovered] = useState(false);
    const ref = useRef<Mesh>(null);
    const texture1 = useTexture('../public/images/3.png')
    const texture2 = useTexture('../public/images/1.png')

    useFrame(() => {
        if (!ref.current) return;
        
        ref.current.rotation.x += 0.001;
        ref.current.rotation.y += 0.0005;
    });

    return (
        <RoundedBox 
            ref={ref}
            onPointerEnter={() => setHovered(!hovered)} 
            onPointerLeave={() => setHovered(!hovered)}
            scale={[5, 3, 1]}>
            <meshBasicMaterial attach="" map={texture1} color={hovered ? 'gray' : '#e5e5e5'} />
            <meshBasicMaterial attach="" map={texture2} color={hovered ? 'gray' : '#e5e5e5'} />
        </RoundedBox>
    );
};

export default Card;