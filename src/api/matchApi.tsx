export type Match = {
  matchId: string;
  team1Name: string;
  team2Name: string;
  runs: number;
  wickets: number;
  overs: number;
  status: string;
};

const BASE_URL = 'http://192.168.1.5:2020';

// returns Match from backend
export async function fetchMatches(): Promise<Match[]> {
  const response = await fetch(`${BASE_URL}/api/matches`);

  if (!response.ok) {
    throw new Error(`Failed to fetch matches: ${response.status}`);
  }

  return response.json();
}

export async function createMatch(payload: {
  team1Name: string;
  team2Name: string;
}) {
  const res = await fetch(`${BASE_URL}/api/matches`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }); // returns Match from backend
  if (!res.ok) throw new Error('Failed to create match');
  return res.json(); 
}