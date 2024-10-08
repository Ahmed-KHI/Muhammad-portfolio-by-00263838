import { useEffect, useState } from "react";
import { getDateTime } from "lib/util/get-date-time";
import { manrope } from "lib/util/get-class";
import clsx from "clsx";

type Props = {};

const ClockWidget = (_props: Props) => {
  const [time, setTime] = useState<string[]>(getDateTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getDateTime());
    }, 1000);
  }, []);

  const [formattedDay, formattedDate, formattedTime] = time;

  return (
    <div
      className={clsx(
        manrope,
        "text-primary-white text-right",
        "space-y-3.5",
        "hidden md:block"
      )}
    >
      <h1 className="text-4xl">{formattedTime}</h1>
      <div className="text-primary-gray">
        <p className="text-lg">{formattedDate}</p>
        <p className="text-lg">{formattedDay}</p>
      </div>
    </div>
  );
};

export default ClockWidget;