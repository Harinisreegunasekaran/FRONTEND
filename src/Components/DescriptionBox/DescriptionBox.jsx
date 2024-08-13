import React from 'react'
import './DescriptionBox.css'
const DescriptionBox=()=>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-nav">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                </div>
            </div>
            <div className="description-description">
                <p>
                An e-commerce website is an online platform that allows users to buy and 
                sell products or services over the internet. These websites have become increasingly
                 popular as they provide a convenient way for consumers to shop from the comfort of their
                  homes and for businesses to reach a global audience.
                </p>
                <p>
                E-commerce websites can also offer personalized recommendations based on user behavior, enhancing the shopping experience. The success of an e-commerce site often depends on its user-friendly design, reliable performance, and efficient customer service.
                </p>
            </div>
        </div>
    )
}
export default DescriptionBox