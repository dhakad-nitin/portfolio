import "./css/tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom/client';
import emailjs from '@emailjs/browser';
import { createRoot } from "react-dom/client";

// Initialize EmailJS with your public key
emailjs.init("5HkYJLAnQOsg10XLp");

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
