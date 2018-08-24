import { restart } from "./../../redux/actions/action_creators";
import { connect } from "react-redux";
import WelcomeScreen from "./../presentational/WelcomeScreen";

const mapDispatchToProps = dispatch => {
  return {
    restart: () => {
      dispatch(restart());
    }
  };
};

//mapstatetoprops and mapdispach to props combines them into one prop

const wsContainer = connect(
  null,
  mapDispatchToProps
)(WelcomeScreen);

export default wsContainer;
