import { prisma } from "../../lib/db";

interface CreateDriverInput {
  phone: string;
  email?: string;
  name: string;
  loginOTP?: number;
  inTrip?: boolean;
  online?: boolean;
  vehicleName: string;
  vehicleNumber: string;
  vehicleType: VehicleType;
  upiID?: string;
  ratings?: number[];
  currentLat?: number;
  currentLong?: number;
  chargePerKm: number;
}

interface UpdateDriverInput {
  phone?: string;
  email?: string;
  name?: string;
  loginOTP?: number;
  inTrip?: boolean;
  online?: boolean;
  vehicleName?: string;
  vehicleNumber?: string;
  vehicleType?: VehicleType;
  upiID?: string;
  ratings?: number[];
  currentLat?: number;
  currentLong?: number;
  chargePerKm?: number;
}

const driverResolvers = {
  Query: {
    allDrivers: () => {
      return prisma.driver.findMany();
    },
    driver: (_parent: any, args: { id: number }) => {
      const id = args.id;
      return prisma.driver.findUnique({
        where: {
          id,
        },
      });
    },
  },
  Mutation: {
    createDriver: (_parent: any, args: { data: CreateDriverInput }) => {
      return prisma.driver.create({
        data: args.data,
      });
    },
    updateDriver: (
      _parent: any,
      args: { id: number; data: UpdateDriverInput }
    ) => {
      return prisma.driver.update({
        where: { id: args.id },
        data: args.data,
      });
    },
    deleteDriver: (_parent: any, args: { id: number }) => {
      return prisma.driver.delete({
        where: { id: args.id },
      });
    },
  },
  Driver: {
    acceptedTrips: (_parent: { id: number }) => {
      return prisma.driver
        .findUnique({
          where: {
            id: _parent.id,
          },
        })
        .acceptedTrips();
    },
    requestedForTrips: (_parent: { id: number }) => {
      return prisma.driver
        .findUnique({
          where: {
            id: _parent.id,
          },
        })
        .requestedForTrips();
    },
  },
};

export default driverResolvers;
