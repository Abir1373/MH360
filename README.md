# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

1. First I have to go to https://vite.dev/guide/
2. run command : npm create vite@latest zap-shift-client -- --template react
3. Go to website : https://reactrouter.com/start/data/installation
4. write command : npm i react-router
5. Go to website https://tailwindcss.com/docs/installation/using-vite
6. run command : npm i tailwindcss @tailwindcss/vite
7. make your vite.config.js :
   import react from "{defineConfig}" from "vite";
   import react from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";
   // https://vite.dev/config/
   export default defineConfig({
   plugins:[react(),tailwindcss()],
   });
   8.clear everything in App.css and index.css
8. write this in index.js : @important "tailwindcss";
9. Go to : https://daisyUI.com/docs/install
10. run command : npm i -D daisyui@latest
11. add this in index.css : @plugin "daisyui";
12. Open your vscode settings (File > Preferences > Settings or Cntrl + ,
13. Animate on screen : npm install aos --save
14. npm i react-hook-form
15. npm i react-fast-marquee --save (for sliding logos)
16. npm i react-js-banner
17. npm install --save react-router-hash-link => use this : import { HashLink } from 'react-router-hash-link';
18. npm i framer-motion => use this : import { motion } from "motion/react"
19. npm install react-icons --save
20. npm install @mui/material @emotion/react @emotion/styled

21. Send Email using EmailJS

a. singin in emailjs
b. add new service & connect account
c. go to email template & create new template
d. copy service id, template id & public key
e. npm i emailjs-com
f. import emailjs from "emailjs-com";
g. create function to send email :
const sendEmail = (e) => {
e.preventDefault();

const templateParams = {
subject: "New Message from Website", // Fixes the missing subject line
from_name: data.name,
reply_to: data.email,
phone_number: data.phone,
message: data.message,
};

      const result = await emailjs.send(
        "service_fpj6myq", // service id
        "template_jyuaism", // template id
        templateParams,
        "9atFXCKTrJpPO-6al", // public key
      );

};
h. add onSubmit={sendEmail} in form tag
i. add name attribute in input fields (name="user_name", name="user_email", name="message")
j. test it by filling the form and submit it, you should receive email in your inbox

22. npm install sweetalert2
"# MH360" 
