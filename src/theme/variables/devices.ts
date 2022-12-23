import { TDevices } from "./types";

const devices: TDevices = {
  desktop: 1279,
  tablet: 1023,
  mobile: 767,
};

for (const device in devices) {
  const currentDevice = device as keyof TDevices;

  devices[currentDevice] = `@media (max-width: ${devices[currentDevice]}px)`;
}

export { devices };
