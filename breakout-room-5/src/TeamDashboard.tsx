import { useState } from 'react';
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

// Author: InezaSamuella
function TeamDashboard() {
  const [teamScore, setTeamScore] = useState<number>(0);

  const increaseScore = () => {
    setTeamScore((currentScore) => currentScore + 1);
  };

  const decreaseScore = () => {
    setTeamScore((currentScore) => Math.max(0, currentScore - 1));
  };

  // Author: Dominion Yusuf
  const [newMemberName, setNewMemberName] = useState<string>('');

  // Author: Dominion Yusuf
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMemberName(e.target.value);
  };

  // Author: Dominion Yusuf
  const handleAddMember = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted new member name:', newMemberName);
    setNewMemberName(''); // Clear the input
  };

  return (
    <>
      <h1>Team Dashboard</h1>
      <p>This application helps manage</p>
      {/*Author: Ineza Samuella*/}
      <section>
        <h2>Team Score: {teamScore}</h2>
        <button type="button" onClick={increaseScore}>Increase Score</button>
        <button type="button" onClick={decreaseScore}>Decrease Score</button>
      </section>
      
      {/* Author: Dominion Yusuf */}
      <section>
        <h2>Add New Member</h2>
        <form onSubmit={handleAddMember}>
          <label htmlFor="newMemberName">Name: </label>
          <input
            id="newMemberName"
            type="text"
            value={newMemberName}
            onChange={handleNameChange}
            placeholder="Enter member name"
          />
          <button type="submit">Submit</button>
        </form>
      </section>

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