import { Client, Account, ID } from "appwrite";
import {APPWRITE_URL , APPWRITE_PROJECT_ID} from '../conf/conf'

    class AuthService {
        client = new Client();
        account
        constructor(){
            this.client.setEndpoint(APPWRITE_URL)
            this.client.setProject(APPWRITE_PROJECT_ID)
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
            return(null)
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
3e