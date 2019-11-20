import { connect } from "react-redux";
import Calculator from "./Calculator";
import { calculateMortgage } from "./calculator.actions";

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = dispatch => ({
  calculateMortgage: (params) => dispatch(calculateMortgage(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
