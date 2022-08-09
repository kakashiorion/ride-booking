import { prisma } from "../../lib/db";

interface CreateSavedAddressInput {
  customerId: number;
  lat: number;
  long: number;
  name: string;
}

interface UpdateSavedAddressInput {
  customerId?: number;
  lat?: number;
  long?: number;
  name?: string;
}

const savedAddressResolvers = {
  Query: {
    allSavedAddresses: () => {
      return prisma.savedAddress.findMany();
    },
    savedAddress: (_parent: any, args: { id: number }) => {
      return prisma.savedAddress.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createSavedAddress: (
      _parent: any,
      args: { data: CreateSavedAddressInput }
    ) => {
      return prisma.savedAddress.create({
        data: args.data,
      });
    },
    updateSavedAddress: (
      _parent: any,
      args: {
        id: number;
        data: UpdateSavedAddressInput;
      }
    ) => {
      return prisma.savedAddress.update({
        where: { id: args.id },
        data: args.data,
      });
    },
    deleteSavedAddress: (_parent: any, args: { id: number }) => {
      return prisma.savedAddress.delete({
        where: { id: args.id },
      });
    },
  },
  SavedAddress: {
    customer: (_parent: { id: number }) => {
      return prisma.savedAddress
        .findUnique({
          where: {
            id: _parent.id,
          },
        })
        .customer();
    },
  },
};

export default savedAddressResolvers;
