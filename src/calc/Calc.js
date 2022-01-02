import React from 'react';
import './Calc.scss';


class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result : ""
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            rate : props.rate
        }
    }

    calcRate = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let radio = elements['radio'].value;
        let countCurrency = elements['count-currency'].value;
        let typeCurrency = elements['type-currency'].value;
        if (radio === 0) {
            this.setState({
                result : (countCurrency / (this.state.rate[typeCurrency] / 0.97) ).toFixed(2)
            })
        }
        else {
            this.setState({
                result : (countCurrency / (this.state.rate[typeCurrency] * 0.97) ).toFixed(2)
            })
        }

    }

    render() {
        return (
            <div className="calc">

                <h3>Калькулятор обмена</h3>
                <div className="block">

                    <div>
                        <form onSubmit={this.calcRate}>
                            <div className="a">
                                <label><input type="radio" name="radio" defaultValue="0" /> продать</label>
                                <label><input type="radio" name="radio" defaultValue="1" /> купить</label>
                            </div>

                            <input type="number" defaultValue="100" name="count-currency" className="order order-input" />
                            <select name="type-currency" id="" className="order order-select">
                                {Object.keys(this.props.rate).map(elem => {
                                    return <option key={elem} defaultValue={elem} >{elem}</option>
                                })}
                            </select>
                            <input type="submit" defaultValue="calc" className="order order-button" />
                        </form>
                    </div>

                    <div>
                        <h4>Результат</h4>
                        <ul className="calc-res">
                            <li>EUR { this.state.result }</li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}



export default Calc;