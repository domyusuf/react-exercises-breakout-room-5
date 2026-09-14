// Author: Dominion Yusuf

import type { CSSProperties } from 'react';

// Author: Alice Uwase
import './MemberCard.css';

// Author: owen-stud123 - Task 10: reusable component.
interface MemberCardProps {
    name: string;
    // Author: Christian Ishimwe
   role?: string;
    // Author: Alice Uwase
    tasksCompleted: number;
    // Author: Ineza Samuella
    isActive: boolean;
    // Author: Benigne Uwitonze
    bio?: string;
    onRemove: (memberName: string) => void;
    onToggleStatus: (memberName: string) => void;
}

  // Author: owen-stud123 - Tasks 46-50: final integration.
  // Author:  Christian Ishimwe
  function MemberCard({ name, role = "Team Member", tasksCompleted, isActive, bio, onRemove, onToggleStatus }: MemberCardProps) {
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
        <div className="member-actions">
          <button type="button" onClick={() => onToggleStatus(name)}>
            Mark as {isActive ? 'inactive' : 'active'}
          </button>
          <button type="button" className="remove-button" onClick={() => onRemove(name)}>
            Remove
          </button>
        </div>
       </div>
    );
}

export default MemberCard;




