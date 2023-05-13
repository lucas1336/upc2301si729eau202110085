export class Participant {
  id: any;
  firstName: string;
  lastName: string;
  marathonCenterName: string;
  ranking: number;
  recordTime: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    marathonCenterName: string,
    ranking: number,
    recordTime: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.marathonCenterName = marathonCenterName;
    this.ranking = ranking;
    this.recordTime = recordTime;
  }
}
