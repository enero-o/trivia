import { restart } from "./../../redux/actions/action_creators";
import { connect } from "react-redux";
import WelcomeScreen from "./../presenters/WelcomeScreen";

const mapDispatchToProps = dispatch => {
  return {
    restart: () => {
      dispatch(restart());
    }
  };
};

//mapstatetoprops and mapdispach to props combines them into one prop

const App = connect(
  null,
  mapDispatchToProps
)(WelcomeScreen);

export default App;
