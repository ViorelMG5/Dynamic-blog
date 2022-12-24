import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PostAPI } from "../api/post-api";
import { setPostsList } from "../store/blogSlice/postSlice";
import { Card } from "./Card";

export function PostList() {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  const fetchAllPosts = async () => {
    const postsList = await PostAPI.fetchAllPosts();
    setPosts(postsList);
    dispatch(setPostsList(postsList));
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return posts.map((post) => (
    <Card
      title={post.title}
      description={post.description}
      image={post.image}
      created_at={post.created_at}
      type={post.type}
    />
  ));
}
