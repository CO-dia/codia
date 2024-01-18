import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { Mesh } from 'three';
import { useHeader } from '../../hooks/useHeader';

const Card = () => {
    const { isDarkMode } = useHeader() || {};
    const ref = useRef<Mesh>(null);
    const texture1 = useTexture('../images/3.png')
    const texture2 = useTexture('../images/1.png')

    useFrame(() => {
        if (!ref.current) return;
        
        ref.current.rotation.x += 0.005;
        ref.current.rotation.y += 0.005;
    });

    return (
        <mesh ref={ref}>
            <boxGeometry attach="geometry" args={[5, 3, 0.01]} />
            <meshBasicMaterial attach="material-4" map={texture1} color={isDarkMode ? 'white' : '#c4c4c4'}/>
            <meshBasicMaterial attach="material-5" map={texture2} color={isDarkMode ? 'white' : '#c4c4c4'}/>
        </mesh>
    );
};

export default Card;