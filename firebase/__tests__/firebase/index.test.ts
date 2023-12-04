const assert = require('assert');

describe("init test", ()=> {
  test('assert test', async () => {
    expect(1).toBe(1);
  })
})
// TODO: 
  // describe("test", () => {
  //   beforeAll(async () => {
  //     await initializeTestEnvironment();
  //     env = getTestEnv();
  //   });
  //
  //   afterAll(async () => {
  //     await env.cleanup();
  //   });
  //
  //   beforeEach(async () => {
  //     await env.withSecurityRulesDisabled(async context => {
  //       const adminDb = context.firestore()
  //       await adminDb.collection("users").doc(users.id).set(users.data);
  //       await adminDb.collection("users").doc(other.id).set(other.data);
  //     })
  //     updateUsersData = Object.assign({}, users.data, {name: 'update-users'})
  //     updateOtherData = Object.assign({}, users.data, {name: 'update-other'})
  //   })
  //   afterEach(async () => {
  //     await env.clearFirestore();
  //   });
  //   test("test", async () => {
  //     const authenticatedDb = getFirestore(env.unauthenticatedContext());
  //     const ref = authenticatedDb.collection("users").doc(users.id);
  //     await assertFails(ref.update(updateUsersData));
  //   });

