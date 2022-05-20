export class MlbPlayerInfo {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _picture: string;
  private _primaryPosition: string;
  private _batSide: string;
  private _throwSide: string;
  private _number: string;
  private _birthCity: string;
  private _birthStateProvince: string;
  private _birthCountry: string;

  constructor(id: number, firstName: string, lastName: string, picture: string, primaryPosition: string, batSide: string, throwSide: string, number: string, birthCity: string, birthStateProvince: string, birthCountry: string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._picture = picture;
    this._primaryPosition = primaryPosition;
    this._batSide = batSide;
    this._throwSide = throwSide;
    this._number = number;
    this._birthCity = birthCity;
    this._birthStateProvince = birthStateProvince;
    this._birthCountry = birthCountry;
  }

  get id(): number {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get picture(): string {
    return this._picture;
  }

  get primaryPosition(): string {
    return this._primaryPosition;
  }

  get batSide(): string {
    return this._batSide;
  }

  get throwSide(): string {
    return this._throwSide;
  }

  get number(): string {
    return this._number;
  }

  get birthCity(): string {
    return this._birthCity;
  }

  get birthStateProvince(): string {
    return this._birthStateProvince;
  }

  get birthCountry(): string {
    return this._birthCountry;
  }
}
