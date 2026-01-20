# AGENTS

This repository is a static SQE quiz site (HTML/CSS/JS + JSON/JS data files). There is no build system or test runner configured.

## Commands

### Run locally (required for JSON/JS loading)

```bash
npx http-server .
```

Open `http://localhost:8080/sqe_ch1_quiz.html` (port may vary).

### Build / lint / test

- Build: not configured.
- Lint: not configured.
- Tests: not configured.
- Single test: not applicable (no test runner present).

If you add tooling later, update this section with concrete commands.

## Repository layout

- `sqe_ch1_quiz.html` is the main UI and quiz loader.
- `General Principals of Criminal Law.json` is a JSON quiz file.
- `PartiesToACrime.js`, `incohate offences.js` are JS quiz files.
- `readme.md` has end‑user run instructions and schema examples.

## Quiz data formats

### JSON quiz files

```json
{
  "title": "Chapter Title",
  "subtitle": "Short description",
  "questions": [
    {
      "topic": "Topic label",
      "q": "Question text",
      "choices": ["A", "B", "C", "D"],
      "correct": 0,
      "explain": {
        "whyRight": "Reason",
        "whyWrong": ["...", "...", "...", "..."]
      }
    }
  ]
}
```

### JS quiz files

Use an IIFE to avoid leaking globals and set `window.quizData` with the same shape:

```js
(() => {
  const questions = [/* ... */];
  window.quizData = {
    title: "Chapter Title",
    subtitle: "Short description",
    questions
  };
})();
```

## Loader behavior (sqe_ch1_quiz.html)

- The dropdown uses the `quizSources` list in `sqe_ch1_quiz.html`.
- Files ending in `.json` are loaded via `fetch()`.
- Files ending in `.js` are loaded by injecting a `<script>` tag, then reading `window.quizData`.
- `qTotal` is derived from the loaded `questions.length`.

## Code style guidelines

### General

- Keep files plain HTML/CSS/JS; no frameworks in use.
- Default to ASCII unless the file already contains non‑ASCII text (question text does).
- Keep changes minimal and consistent with the current style.

### JavaScript

- Use `const` and `let` (no `var`).
- Use double quotes for strings (matches existing files).
- End statements with semicolons.
- Use arrow functions for small callbacks and named functions for larger blocks.
- Prefer small, pure helpers (e.g., `shuffleArray`, `escapeHtml`).
- Avoid introducing new global variables; wrap quiz data in an IIFE.
- When adding quiz data in JS files, set `window.quizData` only once per file.

### HTML/CSS

- Maintain the existing structure and class names unless a UI change is required.
- Reuse existing CSS tokens from `:root` before adding new colors.
- For new controls, follow existing button/select styling.

### Naming conventions

- Quiz data keys are fixed: `topic`, `q`, `choices`, `correct`, `explain`.
- Use clear, descriptive IDs for UI elements (`quizSelect`, `questionText`).
- File names are used in the dropdown; keep them consistent and readable.

### Error handling

- Keep loader errors user‑facing and non‑fatal (see `loadQuiz` catch block).
- When adding new load paths, provide a helpful fallback message.

## Cursor / Copilot rules

- No `.cursorrules`, `.cursor/rules/`, or `.github/copilot-instructions.md` were found in this repository.
