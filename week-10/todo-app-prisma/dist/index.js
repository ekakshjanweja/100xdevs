"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, password, firstName, lastName, phoneNumber, countryCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName,
                phoneNumber,
                countryCode,
            },
        });
        console.log(res);
    });
}
function updateUser(email, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            data: {
                firstName,
                lastName,
            },
            where: {
                email,
            },
        });
        console.log(res);
    });
}
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: {
                email,
            },
        });
        console.log(res);
    });
}
// insertUser("admin3", "123456", "test", "test");
// updateUser("admin1", { firstName: "stormej", lastName: "janweja" });
// getUser("admin1");
// getUser("admin2");
// getUser("admin3");
insertUser("admin5", "123456", "test1", "test1", "1234567890", "US");
// getUser("admin4");
