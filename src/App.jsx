import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { addBlog } from "./store/blogReducer";

function App() {
  const blogs = useSelector((state) => state.blogs);
  console.log(blogs);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    console.log({ title, content });

    const blogData = {
      title,
      content,
    };

    dispatch(addBlog(blogData));
    e.target.reset();
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          rowGap: "10px",
          // marginTop: '2rem',
        }}
      >
        <label>
          <span style={{ display: "block" }}>Title: </span>

          <input name="title" required />
        </label>
        <label>
          <span style={{ display: "block" }}>Content: </span>
          <textarea name="content"></textarea>
        </label>

        <button style={{ width: "30%" }} type="submit">
          Submit
        </button>
      </form>
      <div>
        <span>Notes</span>
        <div>{JSON.stringify(blogs, null, 2)}</div>
      </div>
    </div>
  );
}

export default App;
