// Author: Dominion Yusuf

interface MemberCardProps {
    name: string;
    role: string;
    // Author: Alice Uwase
    tasksCompleted: number;
    // Author: Ineza Samuella
    isActive: boolean;
}


function MemberCard({ name, role,tasksCompleted,isActive }: MemberCardProps) {
    return (
       <div>
        <h3>{name}</h3>
        <p>Role: {role}</p>

        // Author: Alice Uwase
        <p>Task Completed: {tasksCompleted}</p>

        //Author: Ineza Samuella
        <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
       </div>
    );
}

export default MemberCard;




