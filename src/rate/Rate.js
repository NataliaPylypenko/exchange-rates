import React from 'react';
import './Rate.scss';

import Calc from "../calc/Calc";


class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currencyRate' : {}
            // 'date': '31.02.2202',
            // 'currencyRate' : {'USD': 1.1139, 'RUB': 71.0786, 'CAD': 7.4682, 'PHP': 56.286}
        }
        this.currency = ['RUB', 'PLN', 'USD', 'CAD'];
        this.getRate();
    }

    getRate = () => {
        fetch('https://freecurrencyapi.net/api/v2/latest?apikey=408379a0-6bd7-11ec-a1a7-0d75d5c7e490&base_currency=UAH')
            .then(data => {
                return data.json();
            })
            .then(data => {
                let now = new Date();

                let date = now.getDate();
                let month = now.getMonth() + 1;
                let year = now.getFullYear();
                let res = `${date}.${month}.${year}`;

                this.setState({ date : res});

                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.data[this.currency[i]];
                }
                this.setState({ currencyRate : result });
            })
     }

    render() {
        return (
            <div className="rate">
                <div className="container">
                    <h3>Курс валют на {this.state.date}</h3>
                    <div className="flex-container">

                        {Object.keys(this.state.currencyRate).map(elem => {
                            return (
                                <div className="block flex-item" key={elem}>
                                    <div className="currency-name">{ elem }</div>
                                    <div className="currency-in">
                                        <p>Покупка</p>
                                        { (this.state.currencyRate[elem] * 0.97).toFixed(4) }
                                    </div>
                                    <div className="currency-out">
                                        <p>Продажa</p>
                                        { (this.state.currencyRate[elem] / 0.97).toFixed(4) }
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                    <Calc rate={ this.state.currencyRate }/>
                </div>

            </div>
        );
    }
}



export default Rate;