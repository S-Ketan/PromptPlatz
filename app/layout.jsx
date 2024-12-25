import "@styles/globals.css";

export const metadata = {
    title : "PromptPlaza",
    description : "PromptPlaza is a platform for creating and sharing prompts for creative writing.",
};

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
        </head>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
