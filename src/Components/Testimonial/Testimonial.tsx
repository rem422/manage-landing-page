import TestimonialCard from "./TestimonialCard.tsx";
import anishaImg from '../../assets/avatar-anisha.png'
import aliImg from '../../assets/avatar-ali.png'
import richardImg from '../../assets/avatar-richard.png'
import shanaiImg from '../../assets/avatar-shanai.png'
import Button from '../Button/Button.tsx'
function Testimonial() {
    return (
        <section id='testimonials'>
            {/* Container to heading and testimonial blocks */}
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                {/* Heading */}
                <h2 className='text-4xl font-bold text-center'>
                    What's Different About Manage
                </h2>
                {/* Testimonials container */}
                <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
                    <TestimonialCard
                        classes='flex flex-col items-center my-6 p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'
                    img={anishaImg}
                    userName='Anisha Li'
                    userText="'Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.'"
                    />
                    <TestimonialCard
                        classes='flex flex-col items-center my-6 p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'
                    img={aliImg}
                    userName='Ali Brave'
                    userText="'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.'"
                    />
                    <TestimonialCard
                        classes='flex flex-col items-center my-6 p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'
                    img={richardImg}
                    userName='Richard Watts'
                    userText="'Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.'"
                    />
                    <TestimonialCard
                        classes='flex flex-col items-center my-6 p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'
                    img={shanaiImg}
                    userName='Shanai Gough'
                    userText="'Their software allows us to track, manage and collaborate on our projects from anywhere. It Keeps the whole team in-sync without being intrusive.'"
                    />
                </div>
                {/*Button*/}
                <div className='my-16'>
                    <Button
                        classes='p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline  hover:bg-brightRedLight transition-all ease-in-out duration-300'
                        Text='Get Started'
                    />
                </div>
            </div>
        </section>
    );
}

export default Testimonial;