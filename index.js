const Button = (props) => {
  //  Write your code here.
  const { bname, bstyle } = props;
  return <button className={bstyle}>{bname}</button>;
};

const element = (
  //  Write your code here.

  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons">
      <Button bname="Like" bstyle="like-style" />
      <Button bname="Comment" bstyle="comment-style" />
      <Button bname="Share" bstyle="share-style" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
