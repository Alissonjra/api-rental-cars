import { Router } from "express";

import { ResetPasswordUserController } from "@modules/accounts/useCases/resetPasswordUser/ResetPasswordController";
import { SendForgotPasswordController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordController";

const passwordRoutes = Router();

const sendForgotPasswordController = new SendForgotPasswordController();
const resetPasswordController = new ResetPasswordUserController();

passwordRoutes.post("/forgot", sendForgotPasswordController.handle);
passwordRoutes.post("/reset", resetPasswordController.handle);

export { passwordRoutes };
