import { StatusPipe } from "./status.pipe";

describe("StatusPipe", () => {
  it("create an instance", () => {
    const pipe = new StatusPipe();
    expect(pipe).toBeTruthy();
  });

  it("should return Accepted", () => {
    const pipe = new StatusPipe();
    const value = pipe.transform(true);
    expect(value).toBe("Accepted");
  });

  it("should return Rejected", () => {
    const pipe = new StatusPipe();
    const value = pipe.transform(false);
    expect(value).toBe("Rejected");
  });
});
