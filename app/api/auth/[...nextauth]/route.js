import NextAuth from "@node_modules/next-auth";
import GoogleProvider from "@node_modules/next-auth/providers/google";
import { connectToDatabase } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session ({ session }) {
    
  },
  async signIn({profile}){
    try {
        await connectToDatabase();  



        return true;
    } catch (error) {
        console.log(error);
        return false;
        
    }
  }
});

export {handler as GET, handler as POST};