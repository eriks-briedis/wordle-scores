# My Wordle Scores Solution

## Displaying attempts
I decided to create a new component to display each attempt. This component `Attempt` has logic that:
- Checks if the attempt word matches the answer, if it does, we stop there with an early return
 -- Return ⬛ for every letter in the attempted word
- Converts both attempt and answer words to array of letters, like this `wordle => ['w', 'o', 'r', 'd', 'l', 'e']`
- Now we can map all the letters in the attempt and to a color ⬛, 🟨 or 🟩:
 -- letter does't exist in the answer word ⬛
 -- letter exists and is in the correct position 🟩
 -- letter exists but isn't in the correct position 🟨

## Polling for updates
I didn't want to over-engineer this so a went with a super simple solution - just using `setTimeout` to poll for the latest scores in the API every 5 seconds.
I used environment variables to store `API_URL` and `AUTH_TOKEN` so that we don't commit sensitive information to git. There is a simple `config` object to access the available variables - this is done to add abstraction for `process.env`.

## Updating UI
Again, no rocket science here - I just subscribed to `message` events from the worker. On every event, `refetch` is called and UI is updated.

## Next steps
- [ ] Styling - didn't have any time to style this app 😭
- [ ] Adding unit tests for at least `Attempt` component - to make sure all cases are covered
- [ ] Setting up Github actions with `lint`, `test`, `build` steps