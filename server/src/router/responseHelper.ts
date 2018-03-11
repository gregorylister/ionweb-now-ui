export interface IIonResponse
{
    status: boolean;
    data?: any;
    message?: string;
}

export function pass(data: any): IIonResponse
{
    return { status: true, data };
}

export function fail(message: string): IIonResponse
{
    return { status: false, message};
}
