import { ProoViD } from "./index";

describe("proovid-typescript-sdk", () => {
    it("initialize client", async () => {
        const proovid = new ProoViD({
            apiKey: "API_KEY",
        });
    });
});
