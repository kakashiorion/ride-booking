import { gql } from "apollo-server";

const schema = gql`
  type Customer {
    id: Int!
    phone: String!
    loginOTP: Int
    email: String
    name: String!
    inTrip: Boolean!
    trips: [Trip]!
    ratings: [Int]!
    savedAddresses: [SavedAddress]!
    currentLat: Float
    currentLong: Float
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input CreateCustomerInput {
    phone: String!
    loginOTP: Int
    email: String
    name: String!
    inTrip: Boolean
    ratings: [Int]
    currentLat: Float
    currentLong: Float
  }

  input UpdateCustomerInput {
    phone: String
    loginOTP: Int
    email: String
    name: String
    inTrip: Boolean
    ratings: [Int]
    currentLat: Float
    currentLong: Float
  }

  type Driver {
    id: Int!
    phone: String!
    loginOTP: Int
    email: String
    name: String!
    inTrip: Boolean!
    online: Boolean!
    acceptedTrips: [Trip]!
    requestedForTrips: [Trip]!
    ratings: [Int]
    vehicleName: String
    vehicleNumber: String!
    vehicleType: VehicleType!
    upiID: String
    currentLat: Float
    currentLong: Float
    chargePerKm: Float!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input CreateDriverInput {
    phone: String!
    loginOTP: Int
    email: String
    name: String!
    inTrip: Boolean
    online: Boolean
    ratings: [Int]
    vehicleName: String!
    vehicleNumber: String!
    vehicleType: VehicleType!
    upiID: String
    currentLat: Float
    currentLong: Float
    chargePerKm: Float!
  }

  input UpdateDriverInput {
    phone: String
    loginOTP: Int
    email: String
    name: String
    inTrip: Boolean
    online: Boolean
    ratings: [Int]
    vehicleName: String
    vehicleNumber: String
    vehicleType: VehicleType
    upiID: String
    currentLat: Float
    currentLong: Float
    chargePerKm: Float
  }

  type SavedAddress {
    id: Int!
    customer: Customer!
    customerId: Int!
    name: String!
    lat: Float!
    long: Float!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input CreateSavedAddressInput {
    customerId: Int!
    name: String!
    lat: Float!
    long: Float!
  }

  input UpdateSavedAddressInput {
    customerId: Int
    name: String
    lat: Float
    long: Float
  }

  type Trip {
    id: Int!
    customer: Customer!
    customerId: Int!
    driver: Driver
    driverId: Int
    tripOTP: Int
    requestedDrivers: [Driver]!
    sourceLat: Float!
    sourceLong: Float!
    destinationLat: Float!
    destinationLong: Float!
    currentLat: Float
    currentLong: Float
    actualDistanceTravelled: Float
    customerRating: Int
    driverRating: Int
    status: TripStatus!
    createdAt: DateTime!
    updatedAt: DateTime!
    acceptedAt: DateTime
    arrivedAt: DateTime
    startedAt: DateTime
    durationInMins: Int
  }

  input CreateTripInput {
    customerId: Int!
    driverId: Int
    tripOTP: Int
    sourceLat: Float!
    sourceLong: Float!
    destinationLat: Float!
    destinationLong: Float!
    currentLat: Float
    currentLong: Float
    actualDistanceTravelled: Float
    customerRating: Int
    driverRating: Int
    status: TripStatus
    acceptedAt: DateTime
    arrivedAt: DateTime
    startedAt: DateTime
    tripTimeInMins: Int
  }

  input UpdateTripInput {
    customerId: Int
    driverId: Int
    tripOTP: Int
    sourceLat: Float
    sourceLong: Float
    destinationLat: Float
    destinationLong: Float
    currentLat: Float
    currentLong: Float
    actualDistanceTravelled: Float
    customerRating: Int
    driverRating: Int
    status: TripStatus
    acceptedAt: DateTime
    arrivedAt: DateTime
    startedAt: DateTime
    tripTimeInMins: Int
  }

  enum TripStatus {
    SEARCHING
    REQUESTED
    ACCEPTED
    ARRIVED
    STARTED
    COMPLETED
    CANCELLED
  }

  enum VehicleType {
    CAR
    AUTO
    BIKE
  }

  type Query {
    allCustomers: [Customer!]!
    customer(id: Int!): Customer
    allDrivers: [Driver!]!
    driver(id: Int!): Driver
    allSavedAddresses: [SavedAddress!]!
    savedAddress(id: Int!): SavedAddress
    allTrips: [Trip!]!
    trip(id: Int!): Trip
  }

  type Mutation {
    createCustomer(data: CreateCustomerInput!): Customer!
    updateCustomer(id: Int!, data: UpdateCustomerInput!): Customer!
    deleteCustomer(id: Int!): Customer!
    createDriver(data: CreateDriverInput!): Driver!
    updateDriver(id: Int!, data: UpdateDriverInput!): Driver!
    deleteDriver(id: Int!): Driver!
    createSavedAddress(data: CreateSavedAddressInput!): SavedAddress!
    updateSavedAddress(id: Int!, data: UpdateSavedAddressInput!): SavedAddress!
    deleteSavedAddress(id: Int!): SavedAddress!
    createTrip(data: CreateTripInput!): Trip!
    updateTrip(id: Int!, data: UpdateTripInput!): Trip!
    deleteTrip(id: Int!): Trip!
  }
  scalar DateTime
`;

export default schema;
