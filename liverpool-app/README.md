This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

It uses Tailwind, PostCSS, and Autoprefixer, which are tools that help in the development of the UI in a webpage. They all work on the Next.js framework, which uses Javascript.

To install these dependencies, you use

```bash
npm install -D tailwindcss postcss autoprefixer
```

For the cat loading screen, the webpage uses Lottie to render its animation.
To install the dependency, one must write on the terminal

```bash
npm i lottie-react
```

Alongside these visual-oriented packages, the project uses the OpenAI package to realize its ChatGPT tasks. These tasks being able to give whoever uses the tool an idea of how to act around a specific person or group of people to keep their workforce hired.

To install this dependency, you type on the terminal
```bash
pip install openai
```
No forget to put your API key in the 'route.tsx' file inside the 'api' folder.

Finally, it uses React-Chartjs-2 and Chartjs-chart-treemap to structure and generate the graphs one can see in the website. The first package is an adapter for components found in Chartjs to use in Reactjs projects. The second one is an add-on for Chartjs to be able to generate treemaps, a graph that was used on the project.

To install these dependencies, you install them by writing

```bash
npm install --save chart.js react-chartjs-2
# and
npm install chartjs-chart-treemap
```

to create the node modules folder or to update you only need to enter the following: 

```bash
npm i
```
