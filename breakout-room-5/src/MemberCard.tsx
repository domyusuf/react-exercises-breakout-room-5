// Author: Dominion Yusuf

import type { CSSProperties } from 'react';

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
  // Author: Benigne Uwitonze - Task 27
  const cardStyle: CSSProperties = { marginBottom: '10px' };

    return (
     <div className='member-card' style={cardStyle}>
        <h3 className='member-name highlighted'>{name}</h3>
        <p className='member-role'>Role: {role}</p>

        {/*Author: Alice Uwase */}
        <p className='member-tasks'>Task Completed: {tasksCompleted}</p>

        {/* Author: Benigne Uwitonze - Task 26 */}
        {/* Author: Benigne Uwitonze - Task 26 */}
<p className={`member-status ${isActive ? 'active' : 'inactive'}`}>
  Status: {isActive ? 'Active' : 'Inactive'}
</p>
        {bio && <p className="member-bio">Bio: {bio}</p>}
       </div>
    );
}

export default MemberCard;




