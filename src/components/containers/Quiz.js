import { answerQuestion } from "./../../redux/actions/action_creators";
import {connect} from "react-redux";
import Quiz from "./../presenters/Quiz";

const mapStateToProps = state => {
  return { questions: state };
};

const mapDispatchToProps = dispatch => {
  return {
    onAnswerClick: (id, answer) => {
      dispatch(answerQuestion(id, answer));
    }
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

export default App;