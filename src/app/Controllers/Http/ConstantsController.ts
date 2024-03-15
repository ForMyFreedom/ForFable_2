import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ConstantsValidator } from 'App/Validators/ConstantValidator'
import ConstantProvider from '@ioc:Providers/ConstantsService'
import { ConstantsController } from '@ioc:forfabledomain'
import { UsesUsecase } from './_Conversor'


export default class ConstantsAdonisController implements UsesUsecase<ConstantsController> {
  public async index(ctx: HttpContextContract): Promise<void> {
    await ConstantProvider(ctx).show()
  }

  public async show(ctx: HttpContextContract): Promise<void> {
    return await this.index(ctx)
  }

  public async update(ctx: HttpContextContract): Promise<void> {
    const body = await new ConstantsValidator(ctx).validateAsOptional()
    await ConstantProvider(ctx).update(body)
  }
}
