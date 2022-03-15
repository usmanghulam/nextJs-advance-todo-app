export const SET_TODOS = "SET_TODOS";

export const setTodos = (todos: any) => ({ type: SET_TODOS, todos });

export const fetchAllTodos = () => async (dispatch: any) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const todos = await response.json();
    console.log({ todos });
  } catch (error) {
    console.log(error);
  }
};
