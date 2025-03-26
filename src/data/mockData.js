export const mockUser = {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3',
};

// Helper function to generate attendance data
export const generateAttendanceData = (daysPresent, totalDays) => {
    const data = [];

    for (let i = 0; i < totalDays; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (totalDays - i));

        // Randomly distribute present days
        const present = i < daysPresent ? Math.random() > 0.3 : Math.random() > 0.8;

        data.push({
            date: date.toISOString().split('T')[0],
            present
        });
    }

    return data;
};

export const mockWorkplaces = [
    {
        id: '1',
        name: 'Tech University',
        attendanceType: 'weekly',
        attendancePercentage: 87,
        daysPresent: 26,
        totalDays: 30,
        color: '#3498db',
        attendanceData: generateAttendanceData(26, 30)
    },
    {
        id: '2',
        name: 'Innovation Labs',
        attendanceType: 'monthly',
        attendancePercentage: 92,
        daysPresent: 23,
        totalDays: 25,
        color: '#2ecc71',
        attendanceData: generateAttendanceData(23, 25)
    },
    {
        id: '3',
        name: 'Design Academy',
        attendanceType: 'weekly',
        attendancePercentage: 75,
        daysPresent: 15,
        totalDays: 20,
        color: '#e74c3c',
        attendanceData: generateAttendanceData(15, 20)
    },
    {
        id: '4',
        name: 'Global College',
        attendanceType: 'annually',
        attendancePercentage: 95,
        daysPresent: 38,
        totalDays: 40,
        color: '#9b59b6',
        attendanceData: generateAttendanceData(38, 40)
    }
];