import './Footer.css'
const Footer = () => {
  return (
    <div>
       <footer>
            <div className='footer-top'>
            <p>Top companies choose Udemy Business to build in-demand career skills.</p>
            <div className='footer-logo'>
            <img className="footer-mid-img"src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="not found"/>
            <img   className="footer-mid-img" src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="not found"/>
            <img  className="footer-mid-img" src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="not found"/>
            <img   className="footer-mid-img"src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="not found"/>
            <img   className="footer-mid-img"src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="not found"/>
            </div>
            </div>
             <div className="footer-section">
            <div className="footer-section1">
              <ul>
                    <li>Udemy Business</li>
                    <li>Teach on Udemy</li>
                    <li>Get the app</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
               <div>
                    <ul>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Help and Support</li>
                    <li>Affiliate</li>
                    <li>Investors</li>
                    </ul>
              </div>
            <div>
                    <ul>
                    <li>Terms</li>
                    <li>Privacy policy</li>
                    <li>Cookie settings</li>
                    <li>Sitemap</li>
                    <li>Accessibility statement</li>
                   </ul>
            </div>
            </div>
            <div className='footer-img'>
                <img src="data:image/jpeg;base64,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" alt="not found"/>
            </div>
            </div>
            <div className='footer-udemy'>
            <img id="footer-udemylogo"src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZgR2nuQMisjqsybaX64d8t3bYqbendT9qaUyVlZDRfL__9Gr4"  alt="not found"/>
            <p style={{fontSize:"12px"}}>© 2023 Udemy, Inc.</p>
        </div>
    </footer>
    </div>
  )
}
export default Footer
