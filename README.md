This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory `rot-project/ui-rot/`, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

or

In the root directory `rot-project/`, you can run:

> you need to install docker and docker componse to run the following command

### `docker-compose up -d`

Runs the app in the development mode.<br />
Open [http://localhost:8885](http://localhost:8885) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Interactions

- Past Trials and How It Works goes to the respective empty page
- the hero image and data is getting the data from a fetch request `/data/main-person.json`
- hero image and card images are host in a S3 bucket
- the more information link goes to the person wikipedia page
- closing in days comes from the person data `/data/main-person.json` - `closing_date` field
- the cards are getting the data from a fetch request `/data/persons.json`
- the thumb icon next to the person name change to thumb up or thumb down
  - if positive votes are higher than negative votes. it shown thumb up icon
  - if negative votes are higher than positive votes. it shown thumb down icon
  - if negative votes are equal than positive votes. it shown thumb up icon
  - if there are no votes. it shown thumb up icon
- the start time comes from the person data `/data/main-person.json` - `created_at` field
- you can select thumb up or down on each card
- then you can click on the vote now button to send the respective vote
- when you send the vote the body copy change and show a message "Thank you for voting!"
  - thumb up, thumb down and vote now button will hide
  - vote again button will show, you can vote again
- Percentage bars change depending on the up/or downs votes
  - if there are no votes shown 0% on each value. The percentage bar has the same width
  - if the positive votes and negative votes are equal shown 50% on each value. The percentage bar has the same width
  - if the total votes are positives shown 100% in the positive value and 0% in the negative values
  - if the total votes are positives shown the positive progress bar. it fill all the progress bar width
  - if the total votes are negatives shown the negative progress bar. it fill all the progress bar width
- when we get the persons data from `/data/persons.json` it is stored in the `localStorage`
- when we send a vote the data is updated and saved in `localStorage`
- if you refresh the page the data is not lost
