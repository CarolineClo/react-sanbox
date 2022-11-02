import MyArticle from "./MyArticle";

export default function ArticleList(props) {
  return (
    <div className="cards">
      <MyArticle {...props} />
      <MyArticle></MyArticle>
      <MyArticle></MyArticle>
    </div>
  );
}
