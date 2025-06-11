import React from "react";
import 'himshi_ui/dist/main.css';
import 'himshi_ui/dist/modules.css';

import { createRoot } from 'react-dom/client';
import App from "./app";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App/>);