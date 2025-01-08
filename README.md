# PromptPlatz

PromptPlatz is a platform for creating and sharing AI-generated prompts for creative writing. Built with Next.js and Tailwind CSS, it allows users to create, update, and delete prompts, as well as view and interact with prompts created by others.

## Features

- User authentication with Google
- Create, update, and delete prompts
- View and search prompts by tags or usernames
- User profile pages to manage personal prompts

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/promptplatz.git
    cd promptplatz
    ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    GOOGLE_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    MONGODB_URI=your-mongodb-uri
    ```

### Running the Development Server

Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

Build the project for production:
```bash
npm run build
# or
yarn build
```

Start the production server:
```bash
npm start
# or
yarn start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License.