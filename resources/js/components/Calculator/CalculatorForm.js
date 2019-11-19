import React from 'react';
import validator from 'validator';

class CalculatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        principal: "1000",
        term: "10",
        apr: "5"
      },
      errors: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(key, e) {
    let { form } = this.state;
    form[key] = e.target.value;
    this.setState({ form }, () => this.validateForm());
  }

  validateForm() {
    let errors = {};
    const { form } = this.state;
    for (let key in form) {
      if (!validator.isFloat(form[key]) || form[key] <= 0) errors[key] = true;
    }
    this.setState({ errors });
    return Object.keys(errors).length == 0;
  }

  onSubmit(e) {
    e.preventDefault();
    const form = Object.assign({}, this.state.form);
    const { onSubmit } = this.props;
    const csrfToken = this.getMeta("csrf-token");
    if (this.validateForm()) {
      form.session_id = csrfToken;
      if (onSubmit) onSubmit(form);
    }
  }

  getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === metaName) {
        return metas[i].getAttribute('content');
      }
    }
    return '';
  }

  render() {
    const { form, errors } = this.state;
    const { result, submitted } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col col-sm-12 col-md-6 col-lg-4">
            <label>Mortgage amount ($)</label>
            <input value={form.principal} onChange={(e) => this.onChange('principal', e)} type="text" className={`form-control ${errors['principal'] ? 'is-invalid' : null}`}/>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4">
            <label>Interest rate (%)</label>
            <input type="text" value={form.apr} onChange={(e) => this.onChange('apr', e)} className={`form-control ${errors['term'] ? 'is-invalid' : null}`}/>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-4">
            <label>Mortgage period (years)</label>
            <select className="form-control" value={form.term} onChange={(e) => this.onChange('term', e)}>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
          <div className="col col-sm-12 col-md-12 col-lg-12 pt-3">
            <button type="submit" disabled={Object.keys(errors).length > 0} className="btn btn-success">Calculate</button>
          </div>
          <hr />
          {result ?
          <div className="col col-sm-12 col-md-12 col-lg-12 pt-5">
            <h3><b>Monthly payments:</b> ${result.monthlyPayment}</h3>
          </div> : null}
        </div>
      </form>
    );
  }
}

export default CalculatorForm;
