import { QueryClient } from "@tanstack/react-query";
import { CurrenciesEnum, EPresetTimes } from "./types";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: EPresetTimes.MINUTE * 5,
    },
  },
});
export const CurrValues = Object.values(CurrenciesEnum).map((item) => {
  return { name: item };
});
export const api_key = "632a2646ba-d39ea6c572-s3stj3";
