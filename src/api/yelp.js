import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization: `Bearer O5otRlwnMx54ebIIGbkzWXpqoft01CPInMa-CzQaRi-DkuKLuG398pg0HQVEKFBsBz1REIsB1GWScaY3wecs-G44_fVjFKRqe0ibCYWeOOj1mbXq5ok4-pA0N1zDXnYx`,
	},
});
