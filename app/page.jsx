import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col w-full flex-center">
      <h1 className="head_text text-center">
        Prompt. Share. Inspire.
        <br className="max-md:hidden" />
        <span className="arctic-glow-text text-center">AI Prompts</span>
      </h1>
      <p className="desc text-center">
      Whether you're looking for inspiration, unleashing creativity, or sparking new ideas, PromptPlatz connects you with a world of possibilities. Dive in, share your genius, and explore prompts that bring AI to life!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
