const { gql } = require('apollo-server-express');
const { server, connectToDb, dropTestDb, closeDbConnection } = require('./test_setup.js');
const { ObjectId } = require('mongodb');

beforeAll(async () => {
    await connectToDb();
    await dropTestDb();
});

afterAll(async () => {
    await dropTestDb();
    await closeDbConnection();
});

describe('vehicle resolver', () => {
    let vehicleId = '';

    test("test mutation to insert vehicle -- should equal to the inserted data", async () => {
        const ADD_VEHICLE = gql`
            mutation CreateVehicle($vehicleInput: VehicleInput) {
            createVehicle(vehicleInput: $vehicleInput) {
                id
                plateNumber
                color
                model
                brand
            }
        }`;

        const vehicleInfo = {
            "vehicleInput": {
                "brand": "Honda",
                "color": "blue",
                "model": "civic",
                "plateNumber": "abc1234"
            }
        };

        const { data } = await server.executeOperation({
            query: ADD_VEHICLE,
            variables: vehicleInfo
        });

        expect(data.createVehicle.plateNumber).toEqual("abc1234");

    });

    test("test query all vehicles -- should equal to all vehicles inserted", async () => {
        const GET_VEHICLES = gql`query Vehicles {
            vehicles {
                id
                plateNumber
                color
                model
                brand
            }
          }`;

        const { data } = await server.executeOperation({
            query: GET_VEHICLES,
        });

        const { vehicles } = data;

        expect(vehicles).toMatchSnapshot();

        vehicleId = vehicles[0].id;
    });

    test("test query a vehicle -- should equal to vehicle with given id from the list", async () => {
        const GET_VEHICLE = gql`
            query Vehicle($vehicleId: ID!) {
                vehicle(id: $vehicleId) {
                    plateNumber
                    color
                    model
                    brand
                }
            }
        `;

        const { data } = await server.executeOperation({
            query: GET_VEHICLE,
            variables: {
                "vehicleId": vehicleId
            }
        });

        expect(data.vehicle).toMatchSnapshot();
    });

    test("test update a vehicle -- should equal to updated vehicle info", async () => {
        const UPDATE_VEHICLE = gql`
            mutation UpdateVehicle($updateVehicleId: ID!, $vehicleInput: VehicleInput) {
                updateVehicle(id: $updateVehicleId, vehicleInput: $vehicleInput)
            }
        `;

        const { data } = await server.executeOperation({
            query: UPDATE_VEHICLE,
            variables: {
                "updateVehicleId": vehicleId,
                "vehicleInput": {
                    "plateNumber": "abc1111"
                  }
                }
        });

        expect(data.updateVehicle).toBe(true);
    });

    test("test delete a vehicle -- should equal to deleted vehicle from the list", async () => {
        const DELETE_VEHICLE = gql`
            mutation DeleteVehicle($deleteVehicleId: ID!) {
                deleteVehicle(id: $deleteVehicleId)
            }
        `;

        const { data } = await server.executeOperation({
            query: DELETE_VEHICLE,
            variables: {
                "deleteVehicleId": vehicleId,
            }
        });

        expect(data.deleteVehicle).toEqual(true);
    });
});