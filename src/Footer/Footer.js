import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
       <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h2>About Us</h2>
                <ul>
                    <li>Our Team</li>
                    <li>History</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>Categories</h2>
                <ul>
                    <li>Web Development</li>
                    <li>Mobile Development</li>
                    <li>Data Science</li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>Support</h2>
                <ul>
                    <li>Help Center</li>
                    <li>FAQs</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>Connect with Us</h2>
                <div class="social-icons">
                    <NavLink>Facebook</NavLink>
                    <NavLink>Twitter</NavLink>
                    <NavLink>LinkedIn</NavLink>
                    <NavLink>Instagram</NavLink>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
