import { Guid } from 'guid-typescript';

export class Address {
    addressId: Guid;
    street: string;
    number: string;
    postcode: string;
    city: string;
    country: string;
    isPostalAddress: boolean;
}