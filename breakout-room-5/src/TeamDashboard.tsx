import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import MemberCard from './MemberCard';
import './TeamDashboard.css';

// Author: owen-stud123 - Tasks 4-5, 8-9: TeamDashboard component and JSX structure.
// Author: Christian Ishimwe
interface Member {
  id: number;
  name: string;
  role?: string;
  tasksCompleted: number;
  isActive: boolean;
  bio?: string;
}

// Author: Christian Ishimwe
const initialMembers: Member[] = [
  {
    id: 1,
    name: "Alice",
    role: "Backend Developer",
    tasksCompleted: 12,
    isActive: true,
    bio: "Builds reliable server-side features."
  },
  {
    id: 2,
    name: "Samuella",
    role: "UI/UX Designer",
    tasksCompleted: 5,
    isActive: false
  }
];

// Author: InezaSamuella
function TeamDashboard() {
  const [teamScore, setTeamScore] = useState<number>(0);
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [memberFilter, setMemberFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Author: owen-stud123 - Task 46: callback props.

  const increaseScore = () => {
    setTeamScore((currentScore) => currentScore + 1);
  };

  const decreaseScore = () => {
    setTeamScore((currentScore) => Math.max(0, currentScore - 1));
  };

  // Author: Dominion Yusuf
  const [newMemberName, setNewMemberName] = useState<string>('');

  // Author: Dominion Yusuf
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMemberName(e.target.value);
  };

  // Author: Dominion Yusuf
  const handleAddMember = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = newMemberName.trim();

    if (!trimmedName) {
      return;
    }

    setMembers((currentMembers) => [
      ...currentMembers,
      {
        id: currentMembers.length > 0
          ? Math.max(...currentMembers.map((member) => member.id)) + 1
          : 1,
        name: trimmedName,
        role: 'New Member',
        tasksCompleted: 0,
        isActive: true,
      },
    ]);
    setNewMemberName(''); // Clear the input
  };

  const removeMember = (memberName: string) => {
    setMembers((currentMembers) => currentMembers.filter((member) => member.name !== memberName));
  };

  const toggleMemberStatus = (memberName: string) => {
    setMembers((currentMembers) => currentMembers.map((member) => (
      member.name === memberName ? { ...member, isActive: !member.isActive } : member
    )));
  };

  const visibleMembers = members.filter((member) => {
    const matchesFilter = memberFilter === 'all'
      || (memberFilter === 'active' && member.isActive)
      || (memberFilter === 'inactive' && !member.isActive);
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Author: owen-stud123 - Tasks 47-49: member controls.

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

      <section className="member-controls" aria-label="Member controls">
        <label htmlFor="memberSearch">Search members</label>
        <input
          id="memberSearch"
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search by name"
        />
        <div className="filter-controls" aria-label="Filter members">
          {(['all', 'active', 'inactive'] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              className={memberFilter === filter ? 'selected-filter' : ''}
              onClick={() => setMemberFilter(filter)}
            >
              {filter[0].toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <div className="member-grid">
        {visibleMembers.map((member) => (
          <MemberCard
            key={member.name}
            {...member}
            onRemove={removeMember}
            onToggleStatus={toggleMemberStatus}
          />
        ))}
      </div>
    </>
  );
}

export default TeamDashboard;