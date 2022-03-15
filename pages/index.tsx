import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../components/Home/actions";
import TodosList from "../components/Home/TodosList";
// import { wrapper } from "../store/store";

const Home: NextPage = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTodos(props.data));
  }, []);
  const { todos } = useSelector((state: any) => state);
  return <TodosList {...{ todos }} />;
};

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return { props: { data } };
}

export default Home;
