import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Card from '../components/home/Card';

const Home = () => {

    return (
        <div className='flex h-screen w-1/2'>
            <Canvas>
                <Card />
                <OrbitControls enableZoom={false} enablePan={false}/>
            </Canvas>
            <div>
                a
            </div>
        </div>
    );
};

export default Home;