export class MlbTeam {
  private _id: number;
  private _nickname: string;
  private _name: string;
  private _location: string;
  private _abbreviation: string;
  private _logo: string;
  private _league: string;
  private _division: string;


  constructor(id: number, nickname: string, name: string, location: string, abbreviation: string, logo: string, league: string, division: string) {
    this._id = id;
    this._nickname = nickname;
    this._name = name;
    this._location = location;
    this._abbreviation = abbreviation;
    this._logo = logo;
    this._league = league;
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

  set nickname(value: string) {
    this._nickname = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get abbreviation(): string {
    return this._abbreviation;
  }

  set abbreviation(value: string) {
    this._abbreviation = value;
  }

  get logo(): string {
    return this._logo;
  }

  set logo(value: string) {
    this._logo = value;
  }

  get league(): string {
    return this._league;
  }

  set league(value: string) {
    this._league = value;
  }

  get division(): string {
    return this._division;
  }

  set division(value: string) {
    this._division = value;
  }
}
