// export type Match = {
//   matchId: string;
//   team1Name: string;
//   team2Name: string;
//   runs: number;
//   wickets: number;
//   overs: number;
//   status: string;
// };

// const BASE_URL = 'http://192.168.1.6:2020';

// // returns Match from backend
// export async function fetchMatches(): Promise<Match[]> {
//   const response = await fetch(`${BASE_URL}/api/matches`);

//   if (!response.ok) {
//     throw new Error(`Failed to fetch matches: ${response.status}`);
//   }

//   return response.json();
// }
// export async function fetchMatchById(matchId: string): Promise<Match> {
//   const response = await fetch(`${BASE_URL}/api/matches/${matchId}`);
//   return parseJsonResponse<Match>(response);
// }
// export async function createMatch(payload: {
//   team1Name: string;
//   team2Name: string;
// }) {
//   const res = await fetch(`${BASE_URL}/api/matches`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   }); // returns Match from backend
//   if (!res.ok) throw new Error('Failed to create match');
//   return res.json(); 
// }
// export async function addScore(
//   matchId: string,
//   payload: { runs: number; overs: number; wickets: number }
// ) {
//   const res = await fetch(`${BASE_URL}/api/matches/${matchId}/score`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to update score: ${res.status}`);
//   }

//   return res.json();
// }

// async function parseJsonResponse<T>(response: Response): Promise<T> {
//   if (!response.ok) {
//     throw new Error(`Request failed: ${response.status}`);
//   }
//   return response.json();
// }
export type Match = {
  matchId: string;
  team1Name: string;
  team2Name: string;
  runs: number;
  wickets: number;
  overs: number;
  status: string;
};

const BASE_URL = 'http://10.71.228.36:2020';

async function parseJsonResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}

export async function fetchMatches(): Promise<Match[]> {
  const response = await fetch(`${BASE_URL}/api/matches`);
  return parseJsonResponse<Match[]>(response);
}

export async function fetchMatchById(matchId: string): Promise<Match> {
  const response = await fetch(`${BASE_URL}/api/matches/${matchId}`);
  return parseJsonResponse<Match>(response);
}

export async function createMatch(payload: {
  team1Name: string;
  team2Name: string;
}): Promise<Match> {
  const res = await fetch(`${BASE_URL}/api/matches`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return parseJsonResponse<Match>(res);
}

export async function addScore(
  matchId: string,
  payload: { runs: number; overs: number; wickets: number }
): Promise<Match> {
  const res = await fetch(`${BASE_URL}/api/matches/${matchId}/score`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return parseJsonResponse<Match>(res);
}