import customerResolvers from "./customer";
import driverResolvers from "./driver";
import tripResolvers from "./trip";
import savedAddressResolvers from "./savedAddress";

const resolvers = [
  customerResolvers,
  driverResolvers,
  tripResolvers,
  savedAddressResolvers,
];

export default resolvers;
