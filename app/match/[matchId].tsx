import { useLocalSearchParams } from 'expo-router';
import MatchDetailScreen from '../../screens/MatchDetailScreen';

export default function MatchDetailRoute() {
  const params = useLocalSearchParams<{
    matchId?: string;
    team1Name?: string;
    team2Name?: string;
    runs?: string;
    wickets?: string;
    overs?: string;
    status?: string;
  }>();

  return (
    <MatchDetailScreen
      matchId={params.matchId ?? ''}
      team1Name={params.team1Name ?? ''}
      team2Name={params.team2Name ?? ''}
      runs={params.runs ?? ''}
      wickets={params.wickets ?? ''}
      overs={params.overs ?? ''}
      status={params.status ?? ''}
    />
  );
}