import { bindActionCreators } from "redux";

export default (posts = [], action) => {
    switch (action.type) {

        case "FETCH_ALL_DATA":
            return action.payload;
        case "CREATE":
            return [...posts, action.payload];
        default:
            return posts;

    }
}