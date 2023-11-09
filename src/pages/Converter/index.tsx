import { ChangeEvent, useState } from "react";
import BaseInput from "src/components/BaseInputs";
import MainInput from "src/components/BaseInputs/MainInput";
import MainSelect from "src/components/BaseInputs/MainSelect";
import Button from "src/components/Button";
import Loading from "src/components/Loader";
import Typography, { TextSize, Weight } from "src/components/Typography";
import useConvert from "src/hooks/useConvert";
import { CurrValues } from "src/utils/helpers";
import { CurrenciesEnum } from "src/utils/types";

const Converter = () => {
  const [from, setFrom] = useState<CurrenciesEnum>(CurrenciesEnum.USD);
  const [to, setTo] = useState<CurrenciesEnum>(CurrenciesEnum.EUR);
  const [amount, setAmount] = useState<number>(1);

  const { data, isFetching, refetch } = useConvert({
    from,
    to,
    amount,
    enabled: false,
  });

  const handleTo = (e: ChangeEvent<HTMLSelectElement>) =>
    setTo(e.target.value as CurrenciesEnum);
  const handleFrom = (e: ChangeEvent<HTMLSelectElement>) =>
    setFrom(e.target.value as CurrenciesEnum);
  const handleAmount = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(Number(e.target.value));

  const onSubmit = () => {
    refetch();
  };
  return (
    <form className="">
      <div className="flex gap-3 items-end py-6 px-4">
        <BaseInput label="From" className="flex flex-1 flex-col">
          <MainSelect
            defaultValue={CurrenciesEnum.USD}
            values={CurrValues}
            value={from}
            onChange={handleFrom}
          />
        </BaseInput>
        <BaseInput label="To" className="flex flex-1 flex-col">
          <MainSelect
            onChange={handleTo}
            defaultValue={CurrenciesEnum.EUR}
            value={to}
            values={CurrValues}
          />
        </BaseInput>
        <BaseInput label="Amount" className="flex flex-1 flex-col ">
          <MainInput
            onChange={handleAmount}
            placeholder={"enter amount"}
            value={amount}
            type="number"
          />
        </BaseInput>
        <Button
          onClick={onSubmit}
          className="bg-green mb-2 text-white flex flex-1"
        >
          Convert
        </Button>
      </div>

      {data && (
        <div className="my-1 text-center">
          <Typography size={TextSize.XL} weight={Weight.medium}>
            {data?.amount} {data.base} ={" "}
          </Typography>
          <Typography className="text-[2rem]" weight={Weight.semiBold}>
            {data?.result[to]} {to}
          </Typography>
        </div>
      )}
      {isFetching && <Loading />}
    </form>
  );
};

export default Converter;
