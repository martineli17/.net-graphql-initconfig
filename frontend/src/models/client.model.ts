export interface ClientModel {
    id: string;
    name: string;
}

export interface ClientDetailsModel {
    name: string;
    email: string;
}

export interface ClientPaymentsModel {
    id: string;
    value: number;
    paidWhen: Date;
}