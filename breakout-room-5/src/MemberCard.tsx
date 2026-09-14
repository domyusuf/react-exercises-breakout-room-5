// Author: Dominion Yusuf

// Author: Alice Uwase
// @ts-ignore CSS files are handled by the bundler and do not have TypeScript declarations.
import './MemberCard.css';

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
       <div className='member-card'>
        <h3 className='member-name highlighted'>{name}</h3>
        <p className='member-role'>Role: {role}</p>

        {/*Author: Alice Uwase */}
        <p className='member-tasks'>Task Completed: {tasksCompleted}</p>

        {/* Author: Ineza Samuella */}
        <p className='member-status'>Status: {isActive ? 'Active' : 'Inactive'}</p>
        {bio && <p className="member-bio">Bio: {bio}</p>}
       </div>
    );
}

export default MemberCard;




