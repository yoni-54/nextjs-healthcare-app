'use server'

import { ID, Query } from "node-appwrite"
import {parseStringify} from "../utils";
import {
    BUCKET_ID,
    DATABASE_ID,
    ENDPOINT,
    PATIENT_COLLECTION_ID,
    PROJECT_ID,
    databases,
    storage,
    users,
  } from "../appwrite.config";
import {InputFile} from "node-appwrite/file";

export const createUser = async (user: CreateUserParams) => {
  try {
    console.log("user creating in createUser......")
    
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    )                     
console.log({newUser})
    return parseStringify(newUser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const documents = await users.list([
        Query.equal('email', [user.email]),
      ]);

      return documents?.users[0];
    }
    console.error(error)
  }
}

export const getUser = async (userId: string) => {
    try{
        const user = await users.get(userId);
        return parseStringify(user);
    } catch (error) {
        console.log(error)
    }
}

export const registerPatient = async ({ identificationDocument, ...patient }:
   RegisterUserParams) => {
    try {
      console.log("data received");
      let file;

      if (identificationDocument) {
        const inputFile = InputFile.fromBuffer(
            identificationDocument?.get('blobFile') as Blob,
            identificationDocument?.get('fileName') as string,
          )
  
        file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile)
      }
  console.log("creation");
  console.log(patient);
        const newPatient = await databases.createDocument(
        DATABASE_ID!,
        PATIENT_COLLECTION_ID!,
        ID.unique(),
        {
          identificationDocumentId: file?.$id || null,
          identificationDocumentUrl: `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file?.$id}/view?project=${PROJECT_ID}`,
          ...patient
        }
      )
      console.log("created");
  
      return parseStringify(newPatient);
    } catch (error) {
      console.error(error);
    }
  }

export const getPatient = async (userId: string) => {
    try{
        const patients = await databases.listDocuments(
          DATABASE_ID!,
          PATIENT_COLLECTION_ID!,
          [Query.equal('userId', userId)]
        );
        return parseStringify(patients.documents[0]);
    } catch (error) {
        console.log(error)
    }
}