const Button = (props) => {
  //  Write your code here.
  const { name, style } = props;
  return <Button className={style}>{name}</Button>;
};

const element = (
  //  Write your code here.

  <div className="bg-container">
    <h1>Social Buttons</h1>
    <div className="buttons">
      <Button name="Like" style="like-style" />
      <Button name="Comment" style="comment-style" />
      <Button name="Share" style="share-style" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
