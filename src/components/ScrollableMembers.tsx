import Link from "next/link";
import { members } from "@members";
import { getMemberPath } from "@src/utils/helper";
var members1 = members.slice(0, 9)
var members2 = members.slice(10, 20)
export const ScrollableMembers: React.FC = () => {
  return (
    <div className="scrollable-members"> 
      {members1.map((member, i) => (
        <Link
          key={`scrollable-member-${i}`}
          href={getMemberPath(member.id)}
          passHref
        >
          <a className="scrollable-member__link">
            <span className="scrollable-member__image">
              <img
                src={member.avatarSrc}
                alt={member.name}
                className="scrollable-member__img"
                width={80}
                height={80}
              />
            </span>
            <span className="scrollable-member__name">{member.name}</span>
            <span className="scrollable-member__role">{member.role}</span>
          </a>
        </Link>
      ))}
    </div>
    <div className="scrollable-members"> 
      {members2.map((member, i) => (
        <Link
          key={`scrollable-member-${i}`}
          href={getMemberPath(member.id)}
          passHref
        >
          <a className="scrollable-member__link">
            <span className="scrollable-member__image">
              <img
                src={member.avatarSrc}
                alt={member.name}
                className="scrollable-member__img"
                width={80}
                height={80}
              />
            </span>
            <span className="scrollable-member__name">{member.name}</span>
            <span className="scrollable-member__role">{member.role}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};
