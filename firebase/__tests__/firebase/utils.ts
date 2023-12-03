import {
  initializeTestEnvironment as _initializeTestEnvironment,
  RulesTestContext,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import { readFileSync } from "fs";

let testEnv: RulesTestEnvironment;
const PROJECT_ID_DEV = process.env.PROJECT_ID
export const initializeTestEnvironment = async () => {
  testEnv = await _initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: {
      rules: readFileSync("./firestore/firestore.rules", "utf8"),
      host: "127.0.0.1",
      port: 9081,
    },
    storage: {
      rules: readFileSync('./storage/storage.rules', 'utf8'),
      host: "127.0.0.1",
      port: 9082,
    },
  });
};

export const getTestEnv = () => testEnv;

export const getFirestore = (context: RulesTestContext) => {
  return context.firestore();
};
export const getStorage = (context: RulesTestContext) => {
  return context.storage();
};

export type WithId<T> = { id: string, data: T };


type ConvertPropertiesForFirebase<T> = {
    [K in keyof T]: T[K] extends Int | Float | Double ? number : T[K];
};

export function WithoutId<T>(obj: WithId<T>): ConvertPropertiesForFirebase<T> {
    const newData: any = {};
    for (const key in obj.data) {
        const value = obj.data[key];
        if (value instanceof Int || value instanceof Float || value instanceof Double) {
            newData[key] = value.getValue();
        } else {
            newData[key] = value;
        }
    }
    return  newData ;
}
export type Overwrite<T, U extends { [Key in keyof T]?: unknown }> = Omit<
  T,
  keyof U
> & U;

