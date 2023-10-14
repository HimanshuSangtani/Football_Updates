export interface League {
  leagueId: number;
  teamId: number;
}

export interface Fixture {
  teams: {
    home: {
      name: string;
      logo: string;
    };
    away: {
      name: string;
      logo: string;
    };
  };
  goals: {
    home: number;
    away: number;
  };
}
