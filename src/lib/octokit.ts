import { Octokit } from "@octokit/rest";

export const octokit: Octokit = new Octokit();

export const getStars = async () => {
  try {
    const { data } = await octokit.rest.repos.get({
      owner: "turbostarter",
      repo: "loading-ui",
    });
    return data.stargazers_count;
  } catch (error) {
    console.error(error);
    return 0;
  }
};
