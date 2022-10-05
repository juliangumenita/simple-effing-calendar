<a href="https://github.com/juliangumenita/simple-effing-calendar"><img alt="simple-effing-calendar" src="https://raw.githubusercontent.com/juliangumenita/simple-effing-calendar/main/src/Demo/Assets/Header.svg"/></a>
<br />
<div align="center"><strong>Simple f*cking calendar for React.</strong></div>
<div align="center">Lightweight, customizable and super fast.</div>
<br />
<div align="center">
<a href="https://gumenita.com/">Website</a>
<span> · </span>
<a href="https://github.com/juliangumenita/simple-effing-calendar">Documentation</a>
<span> · </span>
<a href="https://www.instagram.com/juliangumenita/">Instagram</a>
</div>
<br />
<div align="center">
  <sub>Made by <a href="https://gumenita.com/">Julian Gumenita</a>‍</sub>
</div>
<br />

# Features

# Getting started

```bash
# via yarn
yarn add simple-effing-calendar

# via npm
npm install --save simple-effing-calendar
```

# Usage

```jsx
import { BigCalendar } from "simple-effing-calendar";

ReactDOM.render(
  <BigCalendar
    date="2022-10-05"
    configuraton={{
      categories: {
        design: {
          title: "Design",
          background: "#F15229",
          color: "#FFFFFF",
        },
        frontend: {
          title: "Frontend",
          background: "#FF7300",
          color: "#FFFFFF",
        },
        backend: {
          title: "Backend",
          background: "#FEBD32",
          color: "#000000",
        },
      },
      legends: {
        display: true,
      },
      width: "100%",
    }}
    events={[
      {
        title: "UX Research",
        description: "Kai",
        category: "design",
        date: "2022-10-01",
      },
      {
        title: "Design System",
        category: "design",
        description: "Kai",
        date: "2022-10-10",
      },
      {
        title: "Landing Page Redesign",
        category: "design",
        description: "Kai",
        date: "2022-10-25",
      },
      {
        title: "Setup Architecture",
        description: "Monica",
        category: "frontend",
        date: "2022-10-28",
      },
      {
        title: "Components",
        description: "Monica",
        category: "frontend",
        date: "2022-10-10",
      },
      {
        title: "Landing Page Improvements",
        description: "Monica",
        category: "frontend",
        date: "2022-10-28",
      },
      {
        title: "API Architecture",
        description: "Luca",
        category: "backend",
        date: "2022-10-18",
      },
      {
        title: "Authentication System",
        description: "Luca",
        category: "backend",
        date: "2022-10-16",
      },
      {
        title: "Performance & Security Improvements",
        description: "Luca",
        category: "backend",
        date: "2022-10-26",
      },
    ]}
  />,
  document.getElementById("root")
);
```
