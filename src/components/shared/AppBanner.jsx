import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import developerLight from "../../images/programmer.svg";
import developerDark from "../../images/programmer.svg";

const BlinkingCursor = () => (
  <span className="inline-block w-2 h-7 bg-blue-600 animate-blink mx-1"></span>
);

const TypingComponent = ({ phrases }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [typingSpeed] = useState(100); // Adjust typing speed as needed
  const [backspacing, setBackspacing] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    let timeout;

    if (!backspacing) {
      if (currentPhrase.length < phrase.length) {
        timeout = setTimeout(() => {
          setCurrentPhrase(phrase.substring(0, currentPhrase.length + 1));
        }, typingSpeed);
      } else {
        setBackspacing(true);
        timeout = setTimeout(() => {
          setBackspacing(false);
          setCurrentPhrase("");
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
        }, typingSpeed * 2); // Pause before starting to backspace
      }
    } else {
      if (currentPhrase.length > 0) {
        timeout = setTimeout(() => {
          setCurrentPhrase(
            currentPhrase.substring(0, currentPhrase.length - 1)
          );
        }, typingSpeed / 2); // Backspacing is faster
      } else {
        setBackspacing(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [currentPhrase, currentPhraseIndex, backspacing, phrases, typingSpeed]);

  return (
    <div>
      {currentPhrase}
      {backspacing ? "" : <BlinkingCursor />}
    </div>
  );
};

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
    >
      <div className="w-full md:w-1/2 text-center sm:text-left">
        <h1 className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
          Hi, I am Nitin
        </h1>
        <div className="mt-4 flex justify-center sm:justify-start">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
            className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-blue-600 dark:text-blue-300 uppercase min-h-[2.5em] flex items-center justify-center sm:justify-start"
          >
            <TypingComponent
              phrases={[
                "Software Developer",
                "AI/ML Developer",
                "Web Developer",
                "Full Stack Developer",
                "Data Scientist",
                "AI Engineer",
              ]}
            />
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <a
            download="Nitin-Resume.pdf"
            href="/files/Nitin_Dhakad_Resume.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-8 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              Download CV
            </span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
        <img
          src={activeTheme === "dark" ? developerLight : developerDark}
          alt="Developer"
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
