import { FaCheckCircle, FaUserTie, FaSmile } from 'react-icons/fa';

import tick from "./check-mark.png"
import trend from "./trend.png"
import support from "./support.png"


const WhyChooseUs = () => {
    return (
        <div className="why-choose-us">
            <h2 className="section-heading">Why Choose Our Real Estate Agency?</h2>
            <div className="box">
                <div className='icon'>
                    <img className="icon" src={tick} />
                </div>
                <h3>Deep Local Expertise</h3>
                <p>
                    Our team consists of local real estate experts who have an in-depth knowledge of the area, neighborhoods, and property values.
                </p>
            </div>
            <div className="box">
                <div className='icon'>
                    <img className="icon" src={trend} />
                </div>
                <h3>Market Trends</h3>
                <p>
                    We stay up-to-date with the latest market trends, ensuring you get the best advice whether you're buying or selling.
                </p>
            </div>
            <div className="box">
                <div className='icon'>
                    <img className="icon" src={support} />
                </div>
                <h3>Dedicated Support</h3>
                <p>
                    Our team is committed to providing prompt responses and support throughout the entire real estate process.
                </p>
            </div>
        </div>
    );
};

export default WhyChooseUs;