import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

const LocationTime = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const vancouverTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/Vancouver",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(vancouverTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="location-time">
      <span className="inline-flex items-center gap-1.5">
        <MapPin className="w-3.5 h-3.5" />
        <span>Vancouver, BC, Canada</span>
      </span>
      <span className="location-time-separator">•</span>
      <span>{time} local time</span>
    </div>
  );
};

export default LocationTime;
