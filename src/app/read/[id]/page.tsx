import React from "react";

const ReadIdPage = ({
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
