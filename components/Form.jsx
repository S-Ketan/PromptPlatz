import Link from "@node_modules/next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col flex">
      <h1 className="head_text text-left">
        <span className="glowing-dawn-text ">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="text-gray-700 font-semibold text-base font-satoshi">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            required
            placeholder="Write your prompt here"
            className="form_textarea"
          />
        </label>
        <label>
          <span className="text-gray-700 font-semibold text-base font-satoshi">
            Tag (#Product, #Lifestyle, #StartUp)
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
            placeholder="Write your tags here"
            className="form_input"
          />
        </label>

        <div className="flex flex-end mx-3 mb-5, gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            disabled={submitting}
            type="submit"
            className="text-sm px-5 py-1.5 rounded-full glowing-dawn-button"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
