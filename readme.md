# Sprint 4 - TypeScript and API

## Goal

Create a web application that displays a random dad joke and the current weather based on the user's location.
This project is intended as a practice exercise for working with TypeScript and APIs


## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/H3llynx/4.TypeScript-API.git
```

2. **Install dependencies:**

```bash
cd 4.TypeScript-API
git checkout refactor
npm install
npm run dev
```

3. **Run tests:**
```bash
npx vitest
```

## Preview in browser:

![Screenshot](src/assets/images/preview.png)

---

## 📁 Folder Structure

```
📦 src
 ┣ 📂 assets
 ┣ 📂 scripts
 │  ┣ 📂 api-manager
 │  │   ┣ 📄 api-config.ts
 │  │   ┗ 📄 api-services.ts
 │  ┣ 📂 jokes             
 │  │    ┣ 📄 joke-services.ts
 │  │    ┣ 📄 score.ts
 │  │    ┗ 📄 ui.ts
 │  ┣ 📂 map            
 │  │    ┗ 📄 ui.ts
 │  ┣ 📂 types
 │  │    ┣ 📄 types.ts
 │  │    ┗ 📄 zod-validation.ts
 │  ┗ 📂 weather
 │       ┣ 📄 ui.ts
 │       ┗ 📄 weather-services.ts
 ┣ 📂 styles
 ┣ 📄 main.ts
 ┣ 📄 vite.env.d.ts
 ┣ 📂 tests
 ┣ 📄 index.html
 ┣ 📄 package-lock.json
 ┣ 📄 package.json
 ┣ 📄 README.md
 ┣ 📄 tsconfig.json
 ┗ 📄 vite.config.ts
```

---

## 🛠 Technologies Used

- TypeScript
- HTML
- CSS
- Vitest

---

## 🤝 Contributions

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: git checkout -b feature/NewFeature
3. Make your changes and commit them: git commit -m 'Add New Feature'
4. Push the changes to your branch: git push origin feature/NewFeature
5. Open a pull request

---

##  Learnings and challenges

This was my first project using TypeScript, and it pushed me to learn its core concepts while improving how I structure and reason about my code. I also deepened my understanding of working with external APIs—handling requests and responses.
One of the key new tools I adopted was Zod, which helped me validate and enforce data shapes safely throughout the project. Overall, the experience strengthened both my TypeScript fundamentals and my approach to building more robust applications.