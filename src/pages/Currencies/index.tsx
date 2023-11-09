import { useState } from "react";
import BaseInput from "src/components/BaseInputs";
import MainSelect from "src/components/BaseInputs/MainSelect";
import Loading from "src/components/Loader";
import Typography, { TextSize, Weight } from "src/components/Typography";
import useCurrencies from "src/hooks/useCurrencies";
import { CurrValues } from "src/utils/helpers";
import { CurrenciesEnum } from "src/utils/types";

const Currencies = () => {
  const [currency, setCurrency] = useState(CurrenciesEnum.USD);
  const { data, isFetching } = useCurrencies({ from: currency });

  return (
    <div className="flex flex-1 flex-col p-4 h-full">
      <BaseInput label="Base currency">
        <MainSelect
          onChange={(e) => setCurrency(e.target.value as CurrenciesEnum)}
          values={CurrValues}
          value={currency}
        />
      </BaseInput>

      <div className="h-full overflow-y-auto">
        {data?.results &&
          Object.entries(data?.results)?.map((item) => (
            <div className="my-1">
              <Typography size={TextSize.M} weight={Weight.medium}>
                1.00 {currency} ={" "}
              </Typography>
              <Typography size={TextSize.XXL} weight={Weight.semiBold}>
                {item[1]} {item[0]}
              </Typography>
            </div>
          ))}

        {isFetching && <Loading />}
      </div>
    </div>
  );
};

export default Currencies;
