import React from "react";

export default function Alert({ content }) {
  return (
    <div className="flex flex-row items-start text-sm font-medium">
      <img className="mt-1 mr-2.5" src="/svg/attention.svg" alt="*" />
      {content}
    </div>
  );
}
