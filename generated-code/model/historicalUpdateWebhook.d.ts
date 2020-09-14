export declare class HistoricalUpdateWebhook {
    'webhookType'?: string;
    'webhookCode'?: string;
    'error'?: Error | null;
    'newTransactions'?: number;
    'itemId'?: string;
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
