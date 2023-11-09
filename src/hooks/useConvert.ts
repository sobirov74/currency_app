import { useQuery } from "@tanstack/react-query";
import apiClient from "src/main";
import { api_key } from "src/utils/helpers";
import { CurrenciesEnum, CunvertTypes } from "src/utils/types";

interface Props {
  from?: CurrenciesEnum;
  to?: CurrenciesEnum | string;
  amount?: number;
  enabled?: boolean;
}
export const useConvert = ({ enabled = true, from, to, amount = 1 }: Props) => {
  return useQuery({
    queryKey: ["convert", from, to, amount],
    queryFn: () =>
      apiClient
        .get({ url: "/convert", params: { from, to, api_key, amount } })
        .then(({ data: response }) => response as CunvertTypes),
    enabled,
  });
};

export default useConvert;
