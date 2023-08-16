"use client";
import { ITopic } from "@/interfaces/Topic";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdatePage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter();

  const getData = async () => {
    const response = await axios.get(
      `http://localhost:9999/topics/${params.id}`
    );
    setTitle(response.data.title);
    setBody(response.data.body);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.patch(
      `http://localhost:9999/topics/${params.id}`,
      { title: title, body: body },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    router.push(`/read/${params.id}`);
    router.refresh();
  };

  useEffect(() => {
    getData();
  }, []);
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
        <input type="submit" value="update"></input>
      </p>
    </form>
  );
};

export default UpdatePage;
