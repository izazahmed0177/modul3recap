# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



-[react router dom](https://reactrouter.com/en/main/start/tutorial)




Degine
-[Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

-[mambaui](https://www.mambaui.com/components)

-[daisyui](https://daisyui.com/)

-[Kometa UI Kit](https://kitwind.io/products/kometa/components)





-[React Firebase Hooks ](https://www.npmjs.com/package/react-firebase-hooks/v/1.2.1#Auth)

-[React Firebase Hooks - Auth Github](https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#usesignout)

-[json-server](https://www.npmjs.com/package/json-server)
use
npm install json-server
then
Create a db.json or db.json5 file
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}

then
$ npx json-server db.json

 npm run dev


Easy way fach ,POST,GET,DELET,PUT,PACH to use


[Axios](https://axios-http.com/docs/intro)


npm install axios



const {data} = await axios.post('https://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone',
    orders: [1, 2, 3]
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
})


===================================

[AXIOS URL-Encoding Bodies](https://axios-http.com/docs/urlencoded)