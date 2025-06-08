import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

const styles = {
  mainContainer: {
    backgroundColor: 'rgb(29, 31, 33)',
    color: 'rgb(43, 188, 138)',
    minHeight: '100vh',
    width: '100%',
    fontFamily: 'Menlo, "Meslo LG", monospace',
    '*': {
      fontFamily: 'Menlo, "Meslo LG", monospace'
    }
  }
};

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  return (
    <div style={styles.mainContainer}>
      <SEO />
      {/* <Navigation />
      <Greetings /> */}
          
      <Projects />
      <Experience />
      {/* <Skills /> */}
      {/* <Proficiency /> */}
 
      {/* <Feedbacks /> */}
    
      {/* <Education /> */}
      <GithubProfileCard {...githubProfileData} />

    </div>
  );
}

// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then(res => res.json());

  return {
    props: { githubProfileData },
  };
}
