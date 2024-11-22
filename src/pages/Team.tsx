import React from 'react';

const Team: React.FC = () => {
    const teamMembers = [
        {
            name: 'John Doe',
            role: 'CEO',
            email: 'johndoe@mrtransport.com',
            contact: '+1 123-456-7890',
            education: 'MBA in Logistics Management',
            image: '/public/team/john_doe.jpg', // Replace with actual image path
            isCEO: true,
        },
        {
            name: 'Jane Smith',
            role: 'Operations Manager',
            email: 'janesmith@mrtransport.com',
            contact: '+1 987-654-3210',
            education: 'BSc in Supply Chain Management',
            image: '/public/team/jane_smith.jpg',
            isCEO: false,
        },
        // Add more team members
    ];

    return (
        <div className="team-container">
            <h1 className="team-title">Meet Our Team</h1>
            <p className="team-intro">
                Our dedicated team is here to ensure the smooth operation of your logistics and transportation needs.
            </p>

            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`team-card ${member.isCEO ? 'ceo' : ''}`}
                    >
                        <img
                            src={member.image}
                            alt={`${member.name}`}
                            className="team-photo"
                        />
                        <h2 className="team-name">{member.name}</h2>
                        <p className="team-role">{member.role}</p>
                        <p className="team-email">📧 {member.email}</p>
                        <p className="team-contact">📞 {member.contact}</p>
                        {member.education && (
                            <p className="team-education">
                                🎓 {member.education}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
