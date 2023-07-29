"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import React from "react";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-teal-500 px-4 py-2 rounded-lg text-white"
    >
      {pending ? <>Loading ...</> : "Add Comment..."}
    </button>
  );
}
