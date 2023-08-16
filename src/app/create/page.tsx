"use client";
import { ITopic } from "@/interfaces/Topic";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:9999/topics/",
      { title: title, body: body },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);
    const newData = response.data.id;
    router.push(`read/${newData}`);
    router.refresh();
  };
  return (
    <form onSubmit={onSubmit}>
      <p>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          type="text"
          name="title"
          placeholder="title"
          value={title}
        ></input>
      </p>
      <p>
        <textarea
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setBody(e.target.value)
          }
          name="body"
          placeholder="body"
          value={body}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="create"></input>
      </p>
    </form>
  );
};

export default CreatePage;
