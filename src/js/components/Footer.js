import React from "react";
import AmazonSmallLogo from "img/amazon_a_logo.png";


const Footer = () => {
	return  (
            <>
                <footer class="footer">
                    <section class="footer-section">
                        <section class="foot_nav row">
                            <img src={AmazonSmallLogo} alt="Amazon Logo" class="footer_website_logo" />
                                <nav class="foot_navigation">
                                    <ul class="foot_navigation__ul-listing">                                                           
                        <li><a href="#">Home</a></li>
                        <li><a href="#" class="text-capitalize">deal store</a></li>
                        <li><a href="#" class="text-capitalize">best sellers</a></li>
                        <li><a href="#" class="text-capitalize">products</a></li>
                    </ul>
                </nav>

                <nav class="foot_navigation">
                    <ul class="foot_navigation__ul-listing">                                                           
                        <li><a href="#">Careers</a></li>
                        <li><a href="#" class="text-capitalize">amazon and our Planet</a></li>
                        <li><a href="#" class="text-capitalize">investor relations</a></li>
                        <li><a href="#" class="text-capitalize">press releases</a></li>
                    </ul>
                </nav>

                 <nav class="foot_navigation">
                    <ul class="foot_navigation__ul-listing">                 
                        <li><a href="#">sell on amazon</a></li>
                        <li><a href="#" class="text-capitalize">Sell Under Amazon Accelerator</a></li>
                        <li><a href="#" class="text-capitalize">Amazon Associates</a></li>
                        <li><a href="#" class="text-capitalize">Sell on Amazon Handmade</a></li>
                    </ul>
                </nav>

                <nav class="foot_navigation">
                    <ul class="foot_navigation__ul-listing">                 
                        <li><a href="#">Amazon.ca Rewards Mastercard</a></li>
                        <li><a href="#" class="text-capitalize">Shop with Points</a></li>
                        <li><a href="#" class="text-capitalize">Reload Your Balance</a></li>
                        <li><a href="#" class="text-capitalize">Gift Cards</a></li>
                    </ul>
                </nav>
            </section>


            <div class="social-media">
                <ul class="social-media__list row">
                    <li>
                        <a href="#" target="_blank" aria-label="A link to facebook profile">
                        <i class="fab fa-facebook-square social-media__icon" title="Click to view facebook profile"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" target="_blank" aria-label="A link to instagram profile">
                        <i class="fab fa-instagram social-media__icon" title="Click to view instagram profile"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </footer>   
            </>
		)
}

export default Footer;