export class SanctionedEntity {
  constructor(
    public id: string,
    public name: string,
    public domicile: string,
    public accepted: boolean
    ){}
}
