import { ITopic } from "@/interfaces/Topic";
import axios from "axios";
import React from "react";

const ReadIdPage = async ({
  // Dynamic routing
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}topics/${params.id}`
  );
  const topic: ITopic = response.data;
  return (
    <div>
      <h2>{topic.title}</h2>
      {topic.body}
    </div>
  );
};

export default ReadIdPage;
