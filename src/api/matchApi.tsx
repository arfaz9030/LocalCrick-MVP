import { getToken } from "../auth/tokenService";

export type Match = {
  matchId: string;
  team1Name: string;
  team2Name: string;
  runs: number;
  wickets: number;
  overs: number;
  status: string;
};

const BASE_URL = 'http://192.168.1.13:2020';

async function parseJsonResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}

export async function fetchMatches(): Promise<Match[]> {
  // const response = await fetch(`${BASE_URL}/api/matches`);
  const response = await fetch(`${BASE_URL}/api/matches`, {
    headers: await getAuthHeaders(),
  });
  return parseJsonResponse<Match[]>(response);
}

export async function fetchMatchById(matchId: string): Promise<Match> {
  // const response = await fetch(`${BASE_URL}/api/matches/${matchId}`);
  const response = await fetch(`${BASE_URL}/api/matches/${matchId}`, {
    headers: await getAuthHeaders(),
  });
  return parseJsonResponse<Match>(response);
}

export async function createMatch(payload: {
  team1Name: string;
  team2Name: string;
}): Promise<Match> {
  // const res = await fetch(`${BASE_URL}/api/matches`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // });
  const res = await fetch(`${BASE_URL}/api/matches`, {
    method: 'POST',
    headers: await getAuthHeaders(),
    body: JSON.stringify(payload),
  });

  return parseJsonResponse<Match>(res);
}

export async function addScore(
  matchId: string,
  payload: { runs: number; overs: number; wickets: number }
): Promise<Match> {
  // const res = await fetch(`${BASE_URL}/api/matches/${matchId}/score`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // });
  const res = await fetch(`${BASE_URL}/api/matches/${matchId}/score`, {
    method: 'POST',
    headers: await getAuthHeaders(),
    body: JSON.stringify(payload),
  });

  return parseJsonResponse<Match>(res);
}

export type Player = {
  id: number;
  name: string;
  jerseyNumber?: number;
  role?: string;
  battingStyle?: string;
  bowlingStyle?: string;
};

export type TeamResponse = {
  id: number;
  name: string;
  captainName: string;
  logoUrl?: string;
  players: Player[];
};

export async function getTeams(): Promise<TeamResponse[]> {
  const token = await getToken();
  console.log("Token Before API:", token);
  // const res = await fetch(`${BASE_URL}/api/teams`);
  const res = await fetch(`${BASE_URL}/api/teams`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch teams');
  }

  return res.json();
}
async function getAuthHeaders() {
  const token = await getToken();

  console.log("Stored Token:", token);

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}