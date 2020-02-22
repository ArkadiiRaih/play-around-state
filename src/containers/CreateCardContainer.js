import { connect } from "react-redux";
import CreateCard from "../Components/CreateCard";
import { createCard } from "../actions/cardActions";

export default connect(null, { createCard })(CreateCard);
