import cl from "classnames";
import { Link, useLocation } from "react-router-dom";
import Typography, { Weight } from "../Typography";

const Selects = [
  { name: "Converter", url: "/" },
  { name: "Currencies", url: "/currencies" },
];

const PageSelect = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex w-full">
      {Selects.map((item) => {
        const active = pathname === item.url;
        return (
          <Link
            to={item.url}
            key={item.name}
            className={cl(
              "flex flex-1 py-2 px-4 hover:bg-hoverColor transition-all duration-500 bg-white justify-center",
              {
                ["!bg-primary text-white hover:bg-primary"]: active,
              }
            )}
          >
            <Typography weight={Weight.medium}>{item.name}</Typography>
          </Link>
        );
      })}
    </div>
  );
};

export default PageSelect;
