import React from 'react'

export default function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="footer__detail">
                    <div className="footer__left">
                        <h2>Contact Info</h2>
                        <h5>Address: 2021-400 Juja</h5>
                        <h5>Phone: +254 725 622 968</h5>
                        <h5>Email: mbuguag026@gmail.com</h5>
                    </div>
                    <div className="footer__center">
                        <h2>Quick Links</h2>
                        <h5>Home</h5>
                        <h5>Shop</h5>
                        <h5>About</h5>
                        <h5>Signup</h5>
                    </div>
                    <div className="footer__right">
                        <h2>Social Links</h2>
                        <div className="icons">
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-whatsapp"></i>
                        </div>
                    </div>
                </div>
                <h3 >Copyright © 2021 Bet.ty's Collection. All rights reserved.</h3>
            </div>
        </div>
    )
}