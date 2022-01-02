import React from 'react';

import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer" id="footer">

                <div className="container">
                    <div className="flex-row">

                        <div className="flex-item">
                            <h1 className="footer-title">
                                <a href="/">2022 &copy; Currencies</a>
                            </h1>
                            <p>All Rights Reserved</p>
                        </div>

                        <div className="flex-item">
                            <ul className="list-unstyled">
                                <li><a href="/sitemap/" tooltip="Карта сайта">Карта сайта</a></li>
                                <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap">Google Sitemap</a></li>
                            </ul>
                        </div>

                        <div className="flex-item">
                            <ul className="list-unstyled">
                                <li><a href="/contacts/" tooltip="Контакты">Контакты</a></li>
                                <li><a href="/guarantees">Гарантии</a></li>
                                <li><a href="/about-the-service">О сервисе</a></li>
                                <li><a href="/return-conditions">Условия возврата</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;
