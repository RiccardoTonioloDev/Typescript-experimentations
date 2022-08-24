# Typescript-experimentations
 Experimenting with Typescript, following a course.

<hr>

## Project 1 (Project manager)
A simple project manager with drag & drop features to enhance the user experience.

To find the project go [here](https://github.com/RiccardoTonioloDev/Typescript-experimentations/tree/main/project-drag-and-drop).
### Configuration

#### Steps to start the app:
- Download all the dependencies using `npm install`;
- To start the project use the following cli command: `npm start`;
- It will spin up a development server on [http://localhost:8080](http://localhost:8080).

<hr>

## Project 2 (Search address & show)
Search an address using my UI interface and using Google Maps APIs I will show it to you through a map!

To find the project go [here](https://github.com/RiccardoTonioloDev/Typescript-experimentations/tree/main/project-share-place).

> The UI is perfectly accessible but there are a few steps to do in order to make the app work. See in the configuration below.

### Configuration

#### Steps to make the app work again:
- In the same folder of app.ts (the `src` folder), you have to create a `config.json` file;
- Inside there paste this code, and set the API key using yours:
```
{
  "GOOGLE_API_KEY": "put you API key here"
}
```
- Set with the same API key, the key used inside of the script in the head of `index.html` (the placeholder is `YOUR_API_KEY_HERE`);
- You are ready to use it!

#### Steps to start the app:
- Download all the dependencies using `npm install`;
- To start the project use the following cli command: `npm start`;
- It will spin up a development server on [http://localhost:8080](http://localhost:8080).
