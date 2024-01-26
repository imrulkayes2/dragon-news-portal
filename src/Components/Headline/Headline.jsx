import Marquee from "react-fast-marquee";

const Headline = () => {
    return (
        <div className='text-start p-2 my-3 flex'>
            <button className='btn btn-secondary'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default Headline;