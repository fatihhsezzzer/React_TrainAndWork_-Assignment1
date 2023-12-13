import React from 'react';


function Footer() {
    return (
        <footer style={{ position: 'relative', bottom: 0, width: '100%' }} className="footer bg-dark text-light mt-4 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Hakkında</h5>
                        <p>Kripto Para Platformu, kripto para piyasaları hakkında güncel bilgiler sunar.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>İletişim</h5>
                        <ul>
                            <li>Email: info@kriptopara.com</li>
                            <li>Telefon: +90 123 456 78 90</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Sosyal Medya</h5>
                        <ul>
                            <li><a href="#" className="text-light">Facebook</a></li>
                            <li><a href="#" className="text-light">Twitter</a></li>
                            <li><a href="#" className="text-light">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className="mb-0">© 2023 Kripto Para Platformu</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
