"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AssetsErrorWebhook {
    static getAttributeTypeMap() {
        return AssetsErrorWebhook.attributeTypeMap;
    }
}
AssetsErrorWebhook.discriminator = undefined;
AssetsErrorWebhook.attributeTypeMap = [
    {
        "name": "webhookType",
        "baseName": "webhook_type",
        "type": "string"
    },
    {
        "name": "webhookCode",
        "baseName": "webhook_code",
        "type": "string"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    },
    {
        "name": "assetReportId",
        "baseName": "asset_report_id",
        "type": "string"
    }
];
exports.AssetsErrorWebhook = AssetsErrorWebhook;
//# sourceMappingURL=assetsErrorWebhook.js.map