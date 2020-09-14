import { Account } from './account';
import { ProcessorAuthGetResponseNumbers } from './processorAuthGetResponseNumbers';
export declare class ProcessorAuthGetResponse {
    'requestId'?: string;
    'numbers'?: ProcessorAuthGetResponseNumbers;
    'account'?: Account;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
