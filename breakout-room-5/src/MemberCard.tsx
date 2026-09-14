// Author: Dominion Yusuf

interface MemberCardProps {
    name: string;
    // Updated by: Christian Ishimwe
   role?: string;
    // Author: Alice Uwase
    tasksCompleted: number;
    // Author: Ineza Samuella
    isActive: boolean;
    // Author: Benigne Uwitonze
    bio?: string;
}

// Updated by:  Christian Ishimwe
function MemberCard({ name, role = "Team Member", tasksCompleted, isActive, bio }: MemberCardProps) {
    return (
       <div>
        <h3>{name}</h3>
        <p>Role: {role}</p>

        // Author: Alice Uwase
        <p>Task Completed: {tasksCompleted}</p>

        //Author: Ineza Samuella
        <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
        {bio && <p>Bio: {bio}</p>}
       </div>
    );
}

export default MemberCard;




