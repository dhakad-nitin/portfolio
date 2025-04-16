import { useState, createContext } from "react";
import { aboutMeData } from "../data/aboutMeData";
import { clientsHeading as clientsPageHeading } from "../data/mySkills";
import { mySkills as mySkillsJson } from "../data/mySkills";

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(aboutMeData);

  const clientsHeading = clientsPageHeading;

  const [mySkills, setmySkills] = useState(mySkillsJson);

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,
        setAboutMe,
        clientsHeading,
        mySkills,
        setmySkills,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;
