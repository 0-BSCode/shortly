export abstract class IAuthService {
  // TODO: Identify what to replace any with
  abstract validateUser(email: string, password: string): Promise<any>;
}
