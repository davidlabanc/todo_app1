import React, { useState, useEffect } from "react";
import { createNewTodo } from "../../_api/todoAPI";
import Overlay from "../hoc/Overlay";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import CancelButton from "../form/CancelButton";
import CreateButton from "../form/CreateButton";
// @ts-ignore
import { useFormState } from "react-dom";

type Props = {
  listId: string;
  addNewTodo: (listId: string, newTodo: string) => void
};

export default function NewTodoForm({ listId, addNewTodo }: Props) {
  const [overlay, setoverlay] = useState(false);
  const [state, formAction] = useFormState(createNewTodo, { success: false });

  const toggleOverlay = () => {
    setoverlay(!overlay);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget)

    toggleOverlay()
    addNewTodo(listId, formData.get("text")?.toString()??'')
  }

  return (
    <div>
      <div className="flex justify-center w-full mb-5">
        <CreateButton
          text="Add new item"
          onClick={toggleOverlay}
          css="w-full"
        />
      </div>
      <Overlay
        header="Add new item to the list"
        overlay={overlay}
        showOverlay={toggleOverlay}
      >
        <form onSubmit={handleSubmit} action={formAction}>
          <input type="hidden" name="listId" value={listId} />
          <Input
            name="text"
            type="text"
            value=""
            placeholder="Enter a new todo..."
          />
          <div className="flex justify-end w-full pt-5">
            <CancelButton
              text="Cancel"
              onClick={toggleOverlay}
              data-test="cancel-button"
            />
            <SubmitButton type="submit" label="Submit" />
          </div>
        </form>
      </Overlay>
    </div>
  );
}
