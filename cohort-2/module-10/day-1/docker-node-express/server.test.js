const createServer = require("./index");
const supertest = require("supertest");
const asapp = createServer();

describe('server', () => {
  it('My Test Case', async () => {
    await supertest(asapp).get("/")
      .expect(200);
  });
});