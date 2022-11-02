import Greeting from "./Greeting";
export default function MyArticle(props) {
  const user = { name: "Caroline", email: "caroline@caroline.dk", kids: 1 };
  return (
    <article className="card">
      <Greeting {...props} />

      <h3>Email: {props.email}</h3>
      <p>you have{props.kids}kid</p>
      <button>push me</button>
    </article>
  );
}
