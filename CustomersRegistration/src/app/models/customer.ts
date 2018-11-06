import { Guid } from 'guid-typescript';
import { Address } from './address'

export class Customer {
    customerId: Guid;
    name: string;
    website: string;
    phone: string;
    email: string;
    addresses: Address[];
}