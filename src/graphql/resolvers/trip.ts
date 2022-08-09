import { prisma } from "../../lib/db";

interface CreateTripInput {
  customerId: number;
  driverId?: number;
  tripOTP?: number;
  sourceLat: number;
  sourceLong: number;
  destinationLat: number;
  destinationLong: number;
  currentLat?: number;
  currentLong?: number;
  actualDistanceTravelled?: number;
  customerRating?: number;
  driverRating?: number;
  status?: TripStatus;
  acceptedAt?: Date;
  arrivedAt?: Date;
  startedAt?: Date;
  durationInMins?: number;
}

interface UpdateTripInput {
  customerId?: number;
  driverId?: number;
  tripOTP?: number;
  sourceLat?: number;
  sourceLong?: number;
  destinationLat?: number;
  destinationLong?: number;
  currentLat?: number;
  currentLong?: number;
  actualDistanceTravelled?: number;
  customerRating?: number;
  driverRating?: number;
  status?: TripStatus;
  acceptedAt?: Date;
  arrivedAt?: Date;
  startedAt?: Date;
  durationInMins?: number;
}

interface UpdateTripInput {}

const tripResolvers = {
  Query: {
    allTrips: () => {
      return prisma.trip.findMany();
    },
    trip: (_parent: any, args: { id: number }) => {
      const id = args.id;
      return prisma.trip.findUnique({
        where: {
          id,
        },
      });
    },
  },
  Mutation: {
    createTrip: (_parent: any, args: { data: CreateTripInput }) => {
      return prisma.trip.create({
        data: args.data,
      });
    },
    updateTrip: (_parent: any, args: { id: number; data: UpdateTripInput }) => {
      return prisma.trip.update({
        where: { id: args.id },
        data: args.data,
      });
    },
    deleteTrip: (_parent: any, args: { id: number }) => {
      return prisma.trip.delete({
        where: { id: args.id },
      });
    },
  },
  Trip: {
    customer: (_parent: { id: number }) => {
      return prisma.trip
        .findUnique({
          where: {
            id: _parent.id,
          },
        })
        .customer();
    },
    driver: (_parent: { id: number }) => {
      return prisma.trip
        .findUnique({
          where: {
            id: _parent.id,
          },
        })
        .driver();
    },
    requestedDrivers: (_parent: { id: number }) => {
      return prisma.trip
        .findUnique({
          where: {
            id: _parent.id,
          },
        })
        .requestedDrivers();
    },
  },
};

export default tripResolvers;
