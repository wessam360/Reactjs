import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

class AuthService {
        client = new Client();
        account
        constructor(){
            this.client.setProject(conf.APPWRITE_PROJECT_ID)
            this.client.setEndpoint(conf.APPWRITE_URL)
            this.account = new Account(this.client)
        }
        async createAccount({email,password,name}){
            try {
               const userAccount = await this.account.create(ID.unique(),email,password)
               if(userAccount){
                //call another method
                this.login()
               }
               else{
                return(userAccount)
               }
            } catch (error) {
                throw error
            }
        }

        async login({email,password}){
            try {
                return await account.createEmailPasswordSession(email,password) 
            } catch (error) {
                console.log("Issue with authService :: login function",error)
            }
            return null
            
        }
        async getCurrentUser(){
            try {
                return await this.account.get()
            } catch (error) {
                throw error
            }
            
        }
        async getCurrentUser(){
            try {
                return await this.account.deleteSessions()
            } catch (error) {
                throw error
            }
            return(null)
        }

    }
const authService = new AuthService()

export default authService
