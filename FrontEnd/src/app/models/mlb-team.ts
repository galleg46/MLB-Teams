export class MlbTeam {
  private _id: number;
  private _nickname: string;
  private _name: string;
  private _location: string;
  private _abbreviation: string;
  private _logo: string;
  private _leage: string;
  private _division: string;


  constructor(id: number, nickname: string, name: string, location: string, abbreviation: string, logo: string, leage: string, division: string) {
    this._id = id;
    this._nickname = nickname;
    this._name = name;
    this._location = location;
    this._abbreviation = abbreviation;
    this._logo = logo;
    this._leage = leage;
    this._division = division;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  get name(): string {
    return this._name;
  }

  get location(): string {
    return this._location;
  }

  get abbreviation(): string {
    return this._abbreviation;
  }

  get logo(): string {
    return this._logo;
  }

  get leage(): string {
    return this._leage;
  }

  get division(): string {
    return this._division;
  }
}
