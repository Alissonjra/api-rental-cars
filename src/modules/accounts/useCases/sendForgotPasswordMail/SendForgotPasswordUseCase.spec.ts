import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UserTokenRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserTokenRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordUseCase } from "./SendForgotPasswordUseCase";

let sendForgotPasswordUseCase: SendForgotPasswordUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UserTokenRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send forgot mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    usersTokensRepositoryInMemory = new UserTokenRepositoryInMemory();
    mailProvider = new MailProviderInMemory();

    sendForgotPasswordUseCase = new SendForgotPasswordUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "3030",
      email: "ato@veli.nl",
      name: "Ronnie Delgado",
      password: "123123",
    });

    await sendForgotPasswordUseCase.execute("ato@veli.nl");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordUseCase.execute("jivpo@wu.tc")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("should be able to create an users token", async () => {
    const generateTokenMail = spyOn(usersTokensRepositoryInMemory, "create");

    usersRepositoryInMemory.create({
      driver_license: "330144",
      email: "sarti@dfrg.ee",
      name: "Iva Benson",
      password: "1234",
    });

    await sendForgotPasswordUseCase.execute("sarti@dfrg.ee");

    expect(generateTokenMail).toBeCalled();
  });
});
