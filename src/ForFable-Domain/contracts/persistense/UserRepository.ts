import { PaginationData } from "ForFable-Domain/usecases";
import { PasswordInsert, PromptEntityWithWrite, ProposalWithPromptName, UserEntity, UserInsert, UserWithToken } from "../../entities";
import { DefaultRepository } from "./_DefaultRepository";

type ExtraInfoOnCreate = {
    isAdmin: boolean
    emailVerified: UserEntity['emailVerified']
}

export interface UserRepository extends DefaultRepository<UserInsert, UserEntity> {
    create(body: UserInsert & ExtraInfoOnCreate): Promise<UserEntity>
    isNeedToVerifyEmail(): Promise<boolean>
    findByIdentify(identify: string): Promise<UserEntity|null>
    passwordIsValid(body: PasswordInsert): Promise<{errors?: string[]}>
    softDelete(userId: UserEntity['id']): Promise<UserEntity|null>
    indexWritesByAuthor(authorId: UserEntity['id'], page?: number, limit?: number): Promise<PaginationData<(ProposalWithPromptName | PromptEntityWithWrite)>>
    putTokenInUser: (user: UserEntity, token: string) => UserWithToken
}

export interface AuthWrapper {
    validateWithCredential(identify: string, password: string): Promise<{token: string|undefined}>
}
