"use client";
import React, { useState } from "react";
import { Lists } from "../../_interfaces/global";
import TodoItem from "./TodoItem";
import CustomSwitch from "../form/CustomSwitch";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NewTodoForm from "./NewTodoForm";

export default function List({ lists }: Lists) {
  const [mode, setMode] = useState<boolean>(false); // false = edit mode, true = delete mode

  const changeMode = (mode: boolean) => {
    setMode(mode);
  };

  return (
    <div className="bg-light-bg border-light-border dark:bg-dark-bg dark:border-dark-border border mb-20 w-1/3 p-5 justify-center rounded-lg min-w-80 min-h-80">
      <div className="flex justify-between pb-5 items-center">
        <h1 className="font-semibold text-3xl dark:text-dark-header">
          Todo List
        </h1>
        <CustomSwitch
          isChecked={mode}
          onChange={changeMode}
          label="Edit mode"
        />
      </div>
      {lists.map((list) => {
        return (
          <Accordion key={list.id} className="dark:border-dark-border border border-light-border -mb-1 shadow-none">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="dark:text-dark-header" />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="dark:bg-dark-bg"
            >
              <p className="dark:text-dark-font">{list.name}</p>
            </AccordionSummary>
            <AccordionDetails className="pt-0 dark:bg-dark-bg dark:text-dark-font">
              <NewTodoForm listId={list.id} />
              {Array.isArray(list.todo) ? (
                list.todo.map((todo, index) => (
                  <TodoItem
                    key={todo.id}
                    index={(index + 1).toString()} // +1 to start numbers from 1
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    mode={mode}
                    listId={list.id}
                  />
                ))
              ) : (
                <p>List is empty</p>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
