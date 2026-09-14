import MemberCard from './MemberCard';
// @ts-ignore CSS files are handled by the bundler and do not have TypeScript declarations.
import './TeamDashboard.css';

// Author: Christian Ishimwe
interface Member {
  name: string;
  role?: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string;
}

const members: Member[] = [
  {
    name: "Alice",
    role: "Backend Developer",
    tasksCompleted: 12,
    isActive: true,
    bio: "Builds reliable server-side features."
  },
  {
    name: "Samuella",
    role: "UI/UX Designer",
    tasksCompleted: 5,
    isActive: false
  }
];
function TeamDashboard() {
  return (
    <>
      <h1>Team Dashboard</h1>
      <p>This application helps manage</p>
      <div className="member-grid">
        {members.map((member) => (
          <MemberCard
            key={member.name}
            {...member}
          />
        ))}
      </div>
    </>
  );
}

export default TeamDashboard;