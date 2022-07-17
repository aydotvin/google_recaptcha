## Steps
- Install package - `npm i react-google-recaptcha`
- Get the test site key from google [documentation](https://developers.google.com/recaptcha/docs/faq#id-like-to-run-automated-tests-with-recaptcha.-what-should-i-do)

## Behaviour
- Check the implementation in App.js
- Captcha includes the following two listeners among others - `onChange` and `onExpired`.
- When user clicks on a captcha, onChange gets fired and a token is passed to the onChange function in place of the event object.
- After about 90s the same token gets expired. The checkbox gets unchecked and event object returns undefined.

