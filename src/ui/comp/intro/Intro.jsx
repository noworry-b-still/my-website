import { Terminal, Hand, Network, Code, Cpu } from 'lucide-react';
import TechnicalArsenal from './TechnicalArsenal';

const styles = {
    container: {
        maxWidth: '48rem',
        margin: '1.5rem auto',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
    },
    gradientText: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#5a2d82',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        fontSize: '1.125rem',
        color: '#374151',
    },
    section: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
    },
    icon: {
        width: '1.5rem',
        height: '1.5rem',
        marginTop: '0.25rem',
        flexShrink: 0,
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        marginTop: '0.5rem',
    },
    skillsSection: {
        marginBottom: '0.5rem',
    },
    skillsHeading: {
        fontWeight: '600',
        marginBottom: '0.5rem',
    },
    skillsText: {
        color: '#4B5563',
    },
};

const iconColors = {
    coffee: '#D97706',    // amber-600
    terminal: '#9333EA',  // purple-600
    cpu: '#2563EB',      // blue-600
    code: '#059669',     // green-600
    network: '#DC2626',  // red-600
};

const Intro = () => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.gradientText}>
                    <span style={{ fontSize: '1.5rem' }}>Namaste,</span>
                    <span>I'm Dinesh Pandikona</span>
                </h1>
                <Hand style={{ ...styles.icon, color: iconColors.coffee }} />

            </div>

            <div style={styles.contentContainer}>
                <div style={styles.section}>
                    <Terminal style={{ ...styles.icon, color: iconColors.terminal }} />
                    <p>
                        I'm passionate about systems that chat over coffee (or maybe just packets ✌🏽).
                        There's something fascinating about how they gossip on a grand scale, and I'm
                        always eager to unravel their secrets.
                    </p>
                </div>

                <div style={styles.section}>
                    <Cpu style={{ ...styles.icon, color: iconColors.cpu }} />
                    <p>
                        My approach to learning? Taking things apart to see what makes them tick.
                        I believe the best way to understand a system is to deconstruct it and
                        rebuild it from the ground up.
                    </p>
                </div>

                <div style={styles.section}>
                    <Network style={{ ...styles.icon, color: iconColors.network }} />
                    <p>
                        As a full-stack developer with a deep fascination for distributed systems,
                        I thrive on building scalable solutions that connect and communicate across
                        the digital landscape.
                    </p>
                </div>

                <TechnicalArsenal />


            </div>
        </div>
    );
};

export default Intro;