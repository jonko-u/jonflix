This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Jonflix

Welcome to this project, an application built using cutting-edge technologies and frameworks to bring you an experience similar to popular streaming platforms like Netflix. This project was developed using React, Tailwind CSS, Next.js, Prisma, MongoDB, NextAuth.js, Crypto, and is deployed on Vercel. Below, you'll find a brief overview of the technologies used, their roles in the project, and how to set up and run the project locally.

## Preview

![App Screenshot](/screenshot1.png)


## Acknowledgements

 - [React](): A widely-used JavaScript library for building user interfaces that are efficient, modular, and maintainable.
 - [Tailwind CSS](): A utility-first CSS framework that helps create stylish and responsive designs with ease.
 - [Next.js](): A powerful React framework that provides server-side rendering, routing, and other optimizations for building high-performance web applications.
- [Prisma](): An open-source database toolkit that simplifies database access and management with an intuitive and type-safe query language.

- [MongoDB](): A popular NoSQL database that provides flexibility and scalability, perfect for managing structured and unstructured data.

- [NextAuth.js](): A library that simplifies authentication in Next.js applications by supporting various authentication providers like GitHub and Google.

-  [Crypto](): A library for cryptographic operations, essential for securing sensitive data like passwords.

-    [Vercel](): A cloud platform for deploying web applications with speed and simplicity.

## API Reference

#### Environment Variables

```
  .env
```

| ENV VAR | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DATABASE_URL` | `string` | **Required**. Your API key |
| `NEXTAUTH_JWT_SECRET` | `string` | **Required**. Your API key |
| `NEXTAUTH_SECRET` | `string` | **Required**. Your API key |
| `GITHUB_ID` | `string` | **Required**. Your API key |
| `GITHUB_SECRET` | `string` | **Required**. Your API key |
| `GOOGLE_CLIENT_ID` | `string` | **Required**. Your API key |
| `GOOGLE_CLIENT_SECRET` | `string` | **Required**. Your API key |


## Deployment

The application is hosted on Vercel, ensuring a smooth and accessible experience for users. To contribute or customize the project, you can clone the repository, set up the required environment variables, and deploy it on your preferred hosting platform.


## Conclusion

This project showcases the power and capabilities of modern web development technologies, combining them to create a feature-rich streaming application. By using React, Tailwind CSS, Next.js, Prisma, MongoDB, NextAuth.js, and Crypto, I have built a secure, user-friendly, and visually appealing platform that allows users to explore content effortlessly. As technology continues to evolve, I am excited to see how these tools can be further leveraged to enhance and innovate web development.

Thank you for exploring the project inspired by [@AntonioErdeljack](https://github.com/AntonioErdeljac/), and I hope you find it insightful and inspiring. If you have any questions, feedback, or suggestions, please don't hesitate to reach out.

Feel free to modify and personalize this content according to your preferences and the specifics of your project.


## Local deployment

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
