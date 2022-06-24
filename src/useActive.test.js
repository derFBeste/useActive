import { renderHook, act } from "@testing-library/react";
import useInactive from "./useInactive";

describe("useInactive", () => {
  const { result } = renderHook(() => useInactive(999));

  it("should load useInactive", () => {
    expect(result.current).toBeFalsy();
    expect(window).toBeFalsy();
  });
});
