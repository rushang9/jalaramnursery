import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from  '../../assets/user-2.png'
import user3 from  '../../assets/user-3.png'
import user4 from  '../../assets/user-4.png'

const Testimonial = () => {

    const slider = useRef();
    let tx = 0;

    const slideforward = () => {
        if(tx>-50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slidebackward = () => {
        if(tx<0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }

    return (
    <div className='Testimonial'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideforward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slidebackward}/>
        <div className='slider'>

            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>William Jackson 1</h3>
                                <span>Educity,USA</span>
                            </div>
                        </div>
                        <p>
                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>William Jackson 2</h3>
                                <span>Educity,USA</span>
                            </div>
                        </div>
                        <p>
                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>William Jackson 3</h3>
                                <span>Educity,USA</span>
                            </div>
                        </div>
                        <p>
                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>William Jackson 4</h3>
                                <span>Educity,USA</span>
                            </div>
                        </div>
                        <p>
                        Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Testimonial
