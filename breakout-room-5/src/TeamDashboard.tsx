import MemberCard from './MemberCard';

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
        <MemberCard 
        name="Alice"
        role="Backend Developer"
        tasksCompleted={12}
        isActive={true}
        // Author: Benigne Uwitonze
        bio="Builds reliable server-side features."
        />
        <MemberCard
        name="Samuella"
        role="UI/UX Designer"
        tasksCompleted={5}
        isActive={false}
        />

    </>
  );
}

export default TeamDashboard;