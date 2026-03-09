import React from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubStats() {
  return (
    <section id="github" className="px-8 md:px-14 py-28">
      <h2 className="text-3xl font-bold mb-10 text-center">
        GitHub Contributions
      </h2>

      <div className="flex justify-center">
        <GitHubCalendar
          username="venkatesh-reddy-prog"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
    </section>
  );
}