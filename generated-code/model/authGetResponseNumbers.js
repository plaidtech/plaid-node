"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthGetResponseNumbers {
    static getAttributeTypeMap() {
        return AuthGetResponseNumbers.attributeTypeMap;
    }
}
AuthGetResponseNumbers.discriminator = undefined;
AuthGetResponseNumbers.attributeTypeMap = [
    {
        "name": "ach",
        "baseName": "ach",
        "type": "Array<NumbersACH>"
    },
    {
        "name": "eft",
        "baseName": "eft",
        "type": "Array<NumbersEFT>"
    },
    {
        "name": "international",
        "baseName": "international",
        "type": "Array<NumbersInternational>"
    },
    {
        "name": "bacs",
        "baseName": "bacs",
        "type": "Array<NumbersBACS>"
    }
];
exports.AuthGetResponseNumbers = AuthGetResponseNumbers;
//# sourceMappingURL=authGetResponseNumbers.js.map