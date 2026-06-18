import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type Team = {
    id: string;
    name: string;
    captainName: string;
};

const mockTeams: Team[] = [
    { id: '1', name: 'CrickHero Warriors', captainName: 'Rohit Dev' },
    { id: '2', name: 'CrickHero Titans', captainName: 'Virat Code' },
];

export const TeamsScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Teams</Text>
            <FlatList
                data={mockTeams}
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

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffffff' },
    title: {
        fontSize: 24,
        fontWeight: '600',
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
        backgroundColor: '#f3f4f6',
        marginBottom: 8,
    },
    teamName: {
        fontSize: 16,
        fontWeight: '600',
    },
    captain: {
        fontSize: 14,
        color: '#4b5563',
        marginTop: 2,
    },
});

export default TeamsScreen;