"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const admin_controller_1 = require("./admin.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const admin_validation_1 = require("./admin.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
// Get All Admin Info (Admin Route)
router.get('/', (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), admin_controller_1.AdminController.getAllAdmins);
// Get Admin Info Himself/Herself
router.get('/:id', admin_controller_1.AdminController.getSingleAdmin);
// Update Customer Info Himself/Herself
router.patch('/:id', (0, validateRequest_1.default)(admin_validation_1.AdminValidation.updateAdminZodSchema), admin_controller_1.AdminController.updateAdmin);
// Delete Admin Info (Admin Route)
router.delete('/:id', (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), admin_controller_1.AdminController.removeAdmin);
exports.AdminRoutes = router;
