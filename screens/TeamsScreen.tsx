// import React from 'react';
// import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

// type Team = {
//     id: string;
//     name: string;
//     captainName: string;
// };

// const mockTeams: Team[] = [
//     { id: '1', name: 'CrickHero Warriors', captainName: 'Rohit Dev' },
//     { id: '2', name: 'CrickHero Titans', captainName: 'Virat Code' },
// ];

// export const TeamsScreen: React.FC = () => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <Text style={styles.title}>Teams</Text>
//             <FlatList
//                 data={mockTeams}
//                 keyExtractor={(item) => item.id}
//                 contentContainerStyle={styles.listContent}
//                 renderItem={({ item }) => (
//                     <View style={styles.card}>
//                         <Text style={styles.teamName}>{item.name}</Text>
//                         <Text style={styles.captain}>Captain: {item.captainName}</Text>
//                     </View>
//                 )}
//             />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: '#ffffff' },
//     title: {
//         fontSize: 24,
//         fontWeight: '600',
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//     },
//     listContent: {
//         paddingHorizontal: 16,
//         paddingBottom: 16,
//     },
//     card: {
//         padding: 12,
//         borderRadius: 8,
//         backgroundColor: '#f3f4f6',
//         marginBottom: 8,
//     },
//     teamName: {
//         fontSize: 16,
//         fontWeight: '600',
//     },
//     captain: {
//         fontSize: 14,
//         color: '#4b5563',
//         marginTop: 2,
//     },
// });

// export default TeamsScreen;
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { getTeams } from '../src/api/matchApi'; // adjust path if your api file is elsewhere
import { COLORS } from '../src/theme/color';
import { FONT_SIZE, FONT_WEIGHT } from '../src/theme/typography';
type Team = {
    id: string;
    name: string;
    captainName: string;
};

export const TeamsScreen: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        const loadTeams = async () => {
            try {
                const data = await getTeams();
                setTeams(
                    data.map((team) => ({
                        id: String(team.id),
                        name: team.name,
                        captainName: team.captainName,
                    }))
                );
            } catch (error) {
                console.error('Failed to load teams', error);
            }
        };

        loadTeams();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Teams</Text>
            <FlatList
                data={teams}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.teamName}>{item.name}</Text>
                        <Text style={styles.captain}>Captain: {item.captainName}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: '#ffffff' },
//     title: {
//         fontSize: 24,
//         fontWeight: '600',
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//     },
//     listContent: {
//         paddingHorizontal: 16,
//         paddingBottom: 16,
//     },
//     card: {
//         padding: 12,
//         borderRadius: 8,
//         backgroundColor: '#f3f4f6',
//         marginBottom: 8,
//     },
//     teamName: {
//         fontSize: 16,
//         fontWeight: '600',
//     },
//     captain: {
//         fontSize: 14,
//         color: '#4b5563',
//         marginTop: 2,
//     },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  title: {
    fontSize: FONT_SIZE.xl,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  card: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: COLORS.card,
    marginBottom: 8,
  },

  teamName: {
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.bold,
    color: COLORS.textPrimary,
  },

  captain: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.textMuted,
    marginTop: 2,
  },
});

export default TeamsScreen;