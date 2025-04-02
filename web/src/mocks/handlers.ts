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
];
