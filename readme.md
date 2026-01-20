# SQE Quiz

## Run locally

Serve the files from the quiz directory (required for JSON/JS loading).

```bash
npx http-server .
```

Then open `http://localhost:8080/sqe_ch1_quiz.html` (port may vary if 8080 is in use).

## Adding quizzes

- Put each chapter quiz in its own `.json` or `.js` file.
- Add the file to the `quizSources` list in `sqe_ch1_quiz.html`.

JSON format example:

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

JS format example:

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
