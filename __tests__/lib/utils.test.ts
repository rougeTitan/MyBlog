import { cn } from "@/lib/utils"

describe("cn utility", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible")
  })

  it("handles undefined values", () => {
    expect(cn("base", undefined, "end")).toBe("base end")
  })

  it("handles empty input", () => {
    expect(cn()).toBe("")
  })

  it("merges tailwind classes correctly (last wins)", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4")
  })

  it("handles array inputs", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar")
  })
})
