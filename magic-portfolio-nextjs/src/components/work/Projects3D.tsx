import { getPosts } from "@/utils/utils";
import { Projects3DSpiral } from "./Projects3DSpiral";

export function Projects3D() {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return <Projects3DSpiral projects={sortedProjects} />;
}
