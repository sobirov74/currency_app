import { useQuery } from "@tanstack/react-query";
import apiClient from "src/main";
import { api_key } from "src/utils/helpers";
import { CurrenciesEnum, CurrenciesTypes } from "src/utils/types";

interface Props {
  from?: CurrenciesEnum;
  to?: CurrenciesEnum | string;
  enabled?: boolean;
}
const allCurrencies = Object.keys(CurrenciesEnum)
  .map((currency) => currency)
  .toString();

export const useCurrencies = ({
  enabled = true,
  from,
  to = allCurrencies,
}: Props) => {
  return useQuery({
    queryKey: ["currencies", from, to],
    queryFn: () =>
      apiClient
        .get({ url: "/fetch-multi", params: { from, to, api_key } })
        .then(({ data: response }) => response as CurrenciesTypes),
    enabled,
  });
};

export default useCurrencies;
