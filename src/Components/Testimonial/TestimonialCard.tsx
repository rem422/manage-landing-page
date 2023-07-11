interface Props {
    img: string,
    userName: string,
    userText: string
    classes?: string
}

function TestimonialCard({img, userName, userText, classes}:Props) {
    return (
        <div className={classes}>
            <img src={img} className='w-16 -mt-14' alt="img"/>
            <h5 className='text-lg font-bold'>{userName}</h5>
            <p className='text-sm text-darkGrayishBlue'>{userText}</p>
        </div>
    );
}

export default TestimonialCard;