import HomeCard from '../../components/home/HomeCard';
import './style.css';

export default function HomePage() {
    const version = import.meta.env.VITE_APP_VERSION || '1.0.0';
    return (
        <main>
            <HomeCard />
            <p className="text-center text-gray-500 mt-4">
                v{version}
            </p>
        </main>
    )
}
