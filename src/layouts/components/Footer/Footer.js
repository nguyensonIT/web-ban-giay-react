import './Footer.css'
import fb from '../../../imgs/icon_svg/facebook-f.svg'
import git from '../../../imgs/icon_svg/github.svg'
import linkin from '../../../imgs/icon_svg/linkedin-in.svg'
import twitter from '../../../imgs/icon_svg/twitter.svg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faPhone, faLocationDot, faEnvelope)

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#">watch</a></li>
                            <li><a href="#">bag</a></li>
                            <li><a href="#">shoes</a></li>
                            <li><a href="#">dress</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><img src={fb}/></a>
                            <a href="#"><img src={git}/></a>
                            <a href="#"><img src={linkin}/></a>
                            <a href="#"><img src={twitter}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
