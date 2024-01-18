import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Card from '../components/home/Card';

const Home = () => {
    return (
        <div className='flex h-screen' id='homediv'>
            <Canvas>
                <Card />
                <OrbitControls enableZoom={false} enablePan={false}/>
            </Canvas>
            <div className='w-2/3 mt-32'>
                <h1>Codia card</h1>
                <p className='w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
        </div>
    );
};

export default Home;