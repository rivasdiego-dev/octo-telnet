import LoadingSpinner from '../../components/LoadingSpinner'

export default function LoadingFallback() {
    return (
        <main className='h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 grid place-items-center'>
            <LoadingSpinner size={'xl'} />
        </main>
    )
}
