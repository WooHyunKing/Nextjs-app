import React from "react";

const CreateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <form>
      <h2>Create Layout</h2>
      {children}
    </form>
  );
};

export default CreateLayout;
