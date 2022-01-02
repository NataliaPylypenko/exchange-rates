import React from 'react';
import './Rate.scss';

import Calc from "../calc/Calc";


class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currencyRate' : {}
            // 'date': '04.07.2022',
            // 'currencyRate' : {'USD': 1.1139, 'RUB': 71.0786, 'CAD': 7.4682, 'PHP': 56.286}
        }
        this.currency = ['USD', 'RUB', 'CAD', 'PHP'];
        this.getRate();
    }

    getRate = () => {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=66fcd11a9a1685d0d548e3a35c0345ef')
            .then(data => {
                return data.json();
            })
            .then(data => {
                this.setState({ date : data.date });

                let result = {};
                for (let i = 0; i < this.currency.length; i++) {
                    result[this.currency[i]] = data.rates[this.currency[i]];
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
                                        { (this.state.currencyRate[elem] * 0.97).toFixed(2) }
                                    </div>
                                    <div className="currency-out">
                                        <p>Продажa</p>
                                        { (this.state.currencyRate[elem] / 0.97).toFixed(2) }
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