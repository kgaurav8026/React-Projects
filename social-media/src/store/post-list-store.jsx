import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Goa Vacation",
    body: "Embarking on a Goa vacation filled with beach bliss, spice trails, and unforgettable moments. ",
    reactions: 2,
    userId: "user-9",
    tags: ["Goa", "Party", "Vacation", "Beaches"],
  },
  {
    id: "2",
    title: "IT Job Market in Turmoil",
    body: "The IT industry has witnessed significant layoffs this year,Will the situation improve in the coming year?",
    reactions: 2,
    userId: "user-69",
    tags: ["Recession", "Unemployment", "IT"],
  },
];
export default PostListProvider;
