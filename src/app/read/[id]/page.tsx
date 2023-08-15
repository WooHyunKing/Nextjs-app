import React from "react";

const ReadIdPage = ({
  // Dynamic routing
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div>
      <h2>This is Read(id :{params.id}) page !</h2>
    </div>
  );
};

export default ReadIdPage;
