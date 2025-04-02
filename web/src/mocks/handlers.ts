import { delay, http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/high-scores", async () => {
    await delay(1000);
    return HttpResponse.json([
      { name: "TAR", score: 20 },
      { name: "CON", score: 15 },
      { name: "DAN", score: 0 },
    ]);
  }),
  http.post("/api/high-scores", async () => {
    await delay(1000);
    return new HttpResponse(null, {
      status: 201,
      statusText: "Score submitted",
    });
    // return new HttpResponse(null, {
    //   status: 401,
    // });
  }),
];
