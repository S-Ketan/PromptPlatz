import "@styles/globals.css";
import Nav from "@components/Nav";
export const metadata = {
    title : "PromptPlatz",
    description : "PromptPlatz is a platform for creating and sharing prompts for creative writing.",
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
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
