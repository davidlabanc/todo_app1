import React, { useState, useRef, useEffect } from "react";
// @ts-ignore
import { useFormState } from "react-dom";
// @ts-ignore
import { useFormStatus } from "react-dom";
import { Todo } from "../../_interfaces/global";
import { changeStatusTodo, deleteTodo, editTodo } from "../../_api/todoAPI";
import SubmitButton from "../form/SubmitButton";
import CheckButton from "../form/CheckButton";
import DeleteButton from "../form/DeleteButton";
import Overlay from "../hoc/Overlay";
import Input from "../form/Input";
import Checkbox from "../form/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";
import LoadingIcon from "../icons/LoadingIcon";
import { LoadingIconAttr } from "@/app/_constants/css_constants";

export interface ITodoItemProps extends Todo {
  index: string;
  listId: string;
}

const TodoItem: React.FC<ITodoItemProps> = ({
  id,
  text,
  completed,
  index,
  listId,
}) => {
  const [overlay, setoverlay] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [stateDelete, formActionDelete] = useFormState(deleteTodo, {
    success: false,
  });
  const [stateEdit, formActionEdit] = useFormState(editTodo, {
    success: false,
  });
  const [stateComplete, formActionComplete] = useFormState(changeStatusTodo, {
    success: false,
  });
  const [mode, setMode] = useState(true); // false = edit mode, true = delete mode, complete todo mode
  const [completeLoading, setCompleteLoading] = useState(false); // completing task loading stateDelete

  useEffect(() => {
    if (stateDelete.success) {
      toggleOverlay();
    }
  }, [stateDelete]);

  useEffect(() => {
    if (stateEdit.success) {
      setMode(true);
    }
  }, [stateEdit]);

  useEffect(() => {
    if (stateComplete.success) {
      setCompleteLoading(false);
    }
  }, [stateComplete]);

  const toggleOverlay = () => {
    setoverlay(!overlay);
  };

  const handleChange = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
      setCompleteLoading(true);
    }
  };

  const overlayComponent = (
    <Overlay
      header="Do you really want to delete this item?"
      overlay={overlay}
      showOverlay={toggleOverlay}
    >
      <form
        action={formActionDelete}
        className="flex items-center mb-2 flex-grow"
      >
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="listId" value={listId} />
        <div className="flex justify-end w-full">
          <button
            type="reset"
            className="text-blue-600 font-semibold hover:underline pr-5"
            onClick={() => toggleOverlay()}
          >
            Cancel
          </button>
          <SubmitButton type="submit" label="Submit" />
        </div>
      </form>
    </Overlay>
  );
  return (
    <div key={id}>
      <div className="flex justify-between items-center mb-2">
        {mode ? (
          <>
            <div className="flex items-center mb-2 group w-full">
              <div
                className={`${
                  completed ? "pr-3" : "pr-[11px]"
                } group-hover:pr-3`}
              >
                {index}.
              </div>
              {completed ? (
                <div className="py-[5px] px-[10px] text-left w-full line-through">
                  {text}
                </div>
              ) : (
                <button
                  className="py-[5px] px-[10px] text-left group-hover:dark:bg-dark-bg group-hover:dark:border-dark-border 
                  group-hover:px-2 group-hover:py-1 group-hover:border group-hover:border-light-border group-hover:rounded-md w-full"
                  onClick={() => {
                    setMode(!mode);
                  }}
                >
                  {text}
                </button>
              )}
            </div>
            <div className="flex flex-grow justify-end group">
              {completeLoading ? (
                <LoadingIcon fill="none" className={`mx-1 ${LoadingIconAttr.className}`} />
              ) : (
                <div className="opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <DeleteButton onClick={toggleOverlay} />
                </div>
              )}

              <form
                action={formActionComplete}
                ref={formRef}
                className="flex items-center"
              >
                <input type="hidden" name="id" value={id} />
                <Checkbox
                  checked={completed}
                  onChange={handleChange}
                  name="checkbox"
                />
              </form>
            </div>
          </>
        ) : (
          <div key={id} className="flex items-center mb-2 w-full">
            <div className="flex items-center">
              <div className="pr-3">{index}.</div>
            </div>
            <div className="flex items-cener"></div>
            <form
              action={formActionEdit}
              className="flex flex-grow items-center"
            >
              <input type="hidden" name="id" value={id} />
              <Input name="text" type="text" value={text} autofocus={!mode} />
              <CheckButton type="submit" />
            </form>
            <button
              onClick={() => {
                setMode(!mode);
              }}
            >
              <ClearIcon />
            </button>
          </div>
        )}
      </div>
      {overlayComponent}
    </div>
  );
};

export default TodoItem;
