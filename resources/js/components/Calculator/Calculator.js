import React from 'react';
import CalculatorForm from './CalculatorForm';

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: null,
      submitted: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(vals) {
    const { calculateMortgage } = this.props;
    this.setState({ result: null, submitted: true }, () => {
      calculateMortgage(vals).then(res => {
        this.setState({ result: res.data, submitted: false });
      })
    });
  }

  render() {
    const { result, submitted } = this.state;
    return (
      <div className="container calculator-container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card ">
              <div className="card-header">Mortgage calculator</div>
              <div className="card-body">
                <CalculatorForm onSubmit={this.onSubmit} result={result} submitted={submitted}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
