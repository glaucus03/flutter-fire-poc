import {
  initializeTestEnvironment as _initializeTestEnvironment,
  RulesTestContext,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import { readFileSync } from "fs";

let testEnv: RulesTestEnvironment;
const PROJECT_ID = process.env.PROJECT_ID;

export const initializeTestEnvironment = async () => {
  try {
    testEnv = await _initializeTestEnvironment({
      projectId: PROJECT_ID,
      firestore: {
        rules: readFileSync("./firestore/firestore.rules", "utf8"),
        host: "127.0.0.1",
        port: 9081,
      },
      storage: {
        rules: readFileSync("./storage/storage.rules", "utf8"),
        host: "127.0.0.1",
        port: 9082,
      },
    });
  } catch (err) {
    console.error("Error initializing test environment: ", err);
  }
};

export const getTestEnv = () => testEnv;

export const getFirestore = (context: RulesTestContext) => {
  return context.firestore();
};
export const getStorage = (context: RulesTestContext) => {
  return context.storage();
};

export class WithId<T> {
  constructor(public id: string, public data: T) { }

  getId(): string {
    return this.id;
  }

  getData(): T {
    return this.data;
  }

  updateData<K extends keyof T, V extends T[K]>(
    key: K,
    value: V,
  ): WithId<Omit<T, K> & Record<K, V>> {
    return new WithId<Omit<T, K> & Record<K, V>>(this.id, {
      ...this.data as any,
      [key]: value,
    });
  }

  updateDataIgnoreType<K extends keyof T, V extends T[K]>(
    key: K,
    value: V,
  ): WithId<Omit<T, K> & Record<K, V>> {
    return new WithId<Omit<T, K> & Record<K, V>>(this.id, {
      ...this.data as any,
      [key]: value,
    });
  }
}
