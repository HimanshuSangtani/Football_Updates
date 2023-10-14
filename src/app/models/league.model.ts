export interface Standing {
  rank: number;
  team: {
    id: number;
    logo: string;
    name: string;
  };
  all: {
    played: number;
    win: number;
    lose: number;
    draw: number;
  };
  away: {
    played: number;
    win: number;
    lose: number;
    draw: number;
  };
  home: {
    played: number;
    win: number;
    lose: number;
    draw: number;
  };
  goalsDiff: number;
  points: number;
}

export interface LeagueData {
  leagueId: number;
}

export interface StandingsResponse {
  response: {
    league: {
      standings: {
        0: {
          standings: Standing[];
        };
      };
    };
  } | null;
}

