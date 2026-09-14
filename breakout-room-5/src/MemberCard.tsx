// Author: Dominion Yusuf

interface MemberCardProps {
    name: string;
    role: string;
    // Author: Alice Uwase
    tasksCompleted: number;
    // Author: Ineza Samuella
    isActive: boolean;
    // Author: Benigne Uwitonze
    bio?: string;
}


function MemberCard({ name, role,tasksCompleted,isActive,bio }: MemberCardProps) {
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




