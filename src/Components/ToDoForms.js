import { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Container,
} from "reactstrap";
import { v4 } from "uuid";

const ToDoForm = ({ addTodos }) => {
  const [todoString, SetTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please add a task");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    //Todo
    addTodos(todo);

    SetTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter a todo String"
            value={todoString}
            onChange={(e) => SetTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button>Add Todo</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default ToDoForm;
