import { prisma } from "../../lib/db";

interface CreateCustomerInput {
  phone: string;
  email?: string;
  name: string;
  loginOTP?: number;
  inTrip?: boolean;
  ratings?: number[];
  currentLat?: number;
  currentLong?: number;
}

interface UpdateCustomerInput {
  phone?: string;
  loginOTP?: number;
  email?: string;
  name?: string;
  inTrip?: boolean;
  ratings?: number[];
  currentLat?: number;
  currentLong?: number;
}

const customerResolvers = {
  Query: {
    allCustomers: () => {
      return prisma.customer.findMany();
    },
    customer: (_parent: any, args: { id: number }) => {
      return prisma.customer.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createCustomer: (_parent: any, args: { data: CreateCustomerInput }) => {
      return prisma.customer.create({
        data: args.data,
      });
    },
    updateCustomer: (
      _parent: any,
      args: { id: number; data: UpdateCustomerInput }
    ) => {
      return prisma.customer.update({
        where: { id: args.id },
        data: args.data,
      });
    },
    deleteCustomer: (_parent: any, args: { id: number }) => {
      return prisma.customer.delete({
        where: { id: args.id },
      });
    },
  },
  Customer: {
    trips: (_parent: { id: number }) => {
      return prisma.customer
        .findUnique({
          where: {
            id: _parent.id,
          },
        })
        .trips();
    },
    savedAddresses: (_parent: { id: number }) => {
      return prisma.customer
        .findUnique({
          where: {
            id: _parent.id,
          },
        })
        .savedAddresses();
    },
  },
};

export default customerResolvers;
