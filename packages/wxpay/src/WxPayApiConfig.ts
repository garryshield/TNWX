/**
 * @author Javen
 * @copyright javendev@126.com
 * @description 微信支付常用配置
 */
export class WxPayApiConfig {
  private appid: string
  private mchid: string
  private providerappid: string
  private providemchid: string
  private apikey: string
  private domain: string
  private certpath: string

  constructor(apiKey: string, domain: string, appId?: string, mchId?: string, certPath?: string, providerAppId?: string, provideMchId?: string) {
    this.appid = appId
    this.mchid = mchId
    this.providerappid = providerAppId
    this.providemchid = provideMchId
    this.apikey = apiKey
    this.domain = domain
    this.certpath = certPath
  }

  public get appId(): string {
    return this.appid
  }

  public set appId(appId: string) {
    this.appId = appId
  }

  public get mchId(): string {
    return this.mchid
  }

  public set mchId(mchId: string) {
    this.mchid = mchId
  }

  public get providerAppId(): string {
    return this.providerappid
  }

  public set providerAppId(providerAppId: string) {
    this.providerappid = providerAppId
  }

  public get provideMchId(): string {
    return this.providemchid
  }

  public set provideMchId(provideMchId: string) {
    this.providemchid = provideMchId
  }

  public get apiKey(): string {
    return this.apikey
  }

  public set apiKey(apiKey: string) {
    this.apikey = apiKey
  }

  public get getDomin(): string {
    return this.domain
  }

  public set setDomain(domain: string) {
    this.domain = domain
  }

  public get certPath(): string {
    return this.certpath
  }

  public set certPath(certPath: string) {
    this.certpath = certPath
  }
}
