import React, { useEffect, useState } from "react";

function Parent() {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const [userdata, setUserdata] = useState();
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
    setComments(comments.concat(text));
    console.log(userdata);
  };
  const deleteOnClick = (index) => {
    const newComments = comments;
    newComments.splice(index, 1);
    setComments([...newComments]);
  };
  useEffect(() => {
    fetch("/data/userdata.json")
      ?.then((response) => response.json())
      ?.then((result) => setUserdata(result));
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={text}
            type="text"
            placeholder="댓글 입력하기 ... "
          />
          <button>button</button>
        </form>
      </div>
      <ul>
        {/* {comments.map((comment, index) => {
          return (
            <li key={index}>
              {comment.value}
              <button onClick={(index) => deleteOnClick(index)}>X</button>
            </li>
          );
        })} */}
      </ul>
      <ul>
        {/* {userdata.map((el) => {
          return <li>{el.username}</li>;
        })} */}
      </ul>
    </div>
  );
}

export default Parent;
