import { APPWRITE_URL, APPWRITE_PROJECT_ID,APPWRITE_BUCKET_ID,APPWRITE_DATABASE_ID,APPWRITE_COLLECTION_ID } from "../conf/conf";
import { Client,Databases,Storage,Query, ID } from "appwrite";

class StorageService {
    client = new Client()
    databases
    storage_bucket
    constructor(){
        this.client.setEndpoint(APPWRITE_URL)
        this.client.setProject(APPWRITE_PROJECT_ID)
        this.storage_bucket = new Storage(this.client)
        this.databases = new Databases(this.client)
    }
        
    async createPost({userId,title,contecnt,featuredImage,status,slug}){
        try {
            return  await this.databases.createDocument(
                APPWRITE_DATABASE_ID, // databaseId
                APPWRITE_COLLECTION_ID, // collectionId
                slug, // documentId
                {
                    title,
                    contecnt,featuredImage,
                    userId,
                    status
                }, // data
            )  
        } catch (error) {
            console.log("appwrite service :: createPost :: error",error); 
        }
        
    }

    async updatePost(slug,{content,title,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                APPWRITE_DATABASE_ID,
                APPWRITE_COLLECTION_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("appwrite service :: updatepost :: error");
        }
    }
    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                APPWRITE_DATABASE_ID,
                APPWRITE_COLLECTION_ID,
                slug
                )  
                return(true)
        } catch (error) {
            console.log("appwrite service :: updatePost :: error",error);
            return false
        }2
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                APPWRITE_DATABASE_ID,
                APPWRITE_COLLECTION_ID,
                slug
            )
        } catch (error) {
            console.log("appwrite service :: getpost :: error",error);
        }
    }
    async getAllPosts(query = [Query("status","active")]){
        try {
            return await this.databases.listDocuments(
                APPWRITE_DATABASE_ID,
                APPWRITE_COLLECTION_ID,
                query //option must be array
            )
        } catch (error) {
            console.log("appwrite service :: getAllPosts error ",error);
        }
    }
    async uploadFile(file){
        try {
            return await this.storage_bucket.createFile(
                APPWRITE_BUCKET_ID,
                ID.unique,
                file
            )
        } catch (error) {
            console.log("appwrite service :: uploadfile :: error",error);
            return false
        }

    }
    async deleteFile(fileId){
        try {
            APPWRITE_BUCKET_ID,
            fileId
        } catch (error) {
            console.log("appwrite service :: delete file :: error",error);
        }
    }
    getFilePreview(fileId){
        try {
            return this.storage_bucket.getFilePreview(
                APPWRITE_BUCKET_ID,
                fileId
            )
        } catch (error) {
            console.log("appwrite service :: getFilePreview error",error);
            return false
        }
    }

}