import { connect } from "react-redux";
import Card from "../Components/Card";
import { removeCard } from "../actions/cardActions";

const mapStateToProps = (state, ownProps) => ({
  card: state.cards.entities[ownProps.cardId]
});

export default connect(mapStateToProps, { removeCard })(Card);
