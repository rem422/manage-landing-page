import Button from '../Button/Button.tsx'
function Cta() {
    return (
        <section id='cta' className='bg-brightRed'>
            <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
                <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
                    Simplify how your team works today
                </h2>
                <Button
                classes='p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900 transition-all ease-in-out duration-300'
                Text='Get Started'
                />
            </div>
        </section>
    );
}

export default Cta;