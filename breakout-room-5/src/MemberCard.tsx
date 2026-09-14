// Author: Dominion Yusuf

interface MemberCardProps {
    name: string;
    role: string;
    // Author: Alice Uwase
    taskCompleted: number;
}


function MemberCard({ name, role,taskCompleted }: MemberCardProps) {
    return (
       <div>
        <h3>{name}</h3>
        <p>Role: {role}</p>

        // Author: Alice Uwase
        <p>Task Completed: {taskCompleted}</p>
       </div>
    );
}

export default MemberCard;




